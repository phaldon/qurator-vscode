/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../compiler/symbols");
const errorBuilder_1 = require("./tools/errorBuilder");
const symbols_2 = require("../../compiler/symbols");
var SemanticAnalyzer;
(function (SemanticAnalyzer) {
    function analyze(codeBlock, symbolTable) {
        let statementValidator = new StatementSemanticValidator(symbolTable);
        let validatingStatement = (a, b) => a.concat(b.accept(statementValidator));
        return codeBlock.childs.reduce(validatingStatement, []);
    }
    SemanticAnalyzer.analyze = analyze;
})(SemanticAnalyzer = exports.SemanticAnalyzer || (exports.SemanticAnalyzer = {}));
class StatementSemanticValidator {
    constructor(symbolTable) {
        this.symbolTable = symbolTable;
    }
    defaultValue() {
        return [];
    }
    visitCodeBlock(block) {
        return block.childs
            .map(innerBlock => innerBlock.accept(new StatementSemanticValidator(this.symbolTable)))
            .reduce((acc, value) => acc.concat(value), []);
    }
    visitStatement(statement) {
        return this.safeAccept(statement.expression, this);
    }
    visitAssignment(assignment) {
        let leftErrors = this.safeAccept(assignment.left, this);
        let rightErrors = this.safeAccept(assignment.right, this);
        return leftErrors.concat(rightErrors);
    }
    visitExpression(expression) {
        let visitingTerms = (a, b) => {
            // in partial compilations this case could happen *do not delete without thinking twice*
            if (b === null) {
                return a;
            }
            let termValidator = new TermSemanticValidator(this.symbolTable, a);
            let currentAnalysis = b.accept(termValidator);
            return currentAnalysis;
        };
        let expressionAnalysis = expression.terms.reduce(visitingTerms, new ExpressionAnalysis());
        return expressionAnalysis.errors;
    }
    safeAccept(element, visitor) {
        // in partial compilations this case could happen *do not delete without thinking twice*
        if (element === null) {
            return this.defaultValue();
        }
        return element.accept(visitor);
    }
}
class TermSemanticValidator {
    constructor(symbolTable, currentAnalysis) {
        this.symbolTable = symbolTable;
        this.currentAnalysis = currentAnalysis;
    }
    defaultValue() {
        return this.currentAnalysis;
    }
    visitVariableReference(variable) {
        this.currentAnalysis.lastSymbol = this.symbolTable.lookup(variable.value, variable.start.line);
        return this.currentAnalysis;
    }
    visitMethodReference(method) {
        let methodSymbol = null;
        let flag = false;
        if (this.currentAnalysis.lastSymbol === undefined) {
            let dict = this.symbolTable.currentScope.dictionary;
            let values = null;
            let type = null;
            let args = null;
            if (dict.size > 0) {
                for (let key of dict.keys()) {
                    if (key === method.name) {
                        values = dict.get(key);
                        flag = true;
                        break;
                    }
                }
            }
            if (values !== null) {
                for (let value of values) {
                    let classSymbol = value.symbol;
                    type = classSymbol.type;
                    if (classSymbol.requiredArguments.length > 0) {
                        args = classSymbol.requiredArguments;
                    }
                    else {
                        flag = false;
                    }
                }
            }
            if (flag) {
                methodSymbol = new symbols_1.MethodSymbol(method.name, type, args);
            }
        }
        else {
            methodSymbol = this.findMethodSymbol(method.name, this.currentAnalysis.lastSymbol);
        }
        if (methodSymbol) {
            this.currentAnalysis.errors.push(...this.checkMethodArguments(method, methodSymbol));
            this.currentAnalysis.lastSymbol = methodSymbol.type;
        }
        return this.currentAnalysis;
    }
    findMethodSymbol(methodName, lastSymbol) {
        if (lastSymbol === null) {
            return null;
        }
        if (lastSymbol instanceof symbols_1.VariableSymbol) {
            return this.extractMethodFromVariable(lastSymbol, methodName);
        }
        if (lastSymbol instanceof symbols_1.ClassSymbol) {
            return this.extractMethodFromClass(lastSymbol, methodName);
        }
        return null;
    }
    checkMethodArguments(method, methodSymbol) {
        return []
            .concat(this.checkArgumentsNumber(method, methodSymbol))
            .concat(this.checkArgumentsType(method, methodSymbol));
    }
    checkArgumentsNumber(method, methodSymbol) {
        let result = [];
        let requiredArguments = methodSymbol.arguments.filter(arg => arg.optional === false).length;
        if (method.args.length < requiredArguments) {
            let message = `Expecting ${requiredArguments} arguments but ${method.args.length} received`;
            let error = errorBuilder_1.ErrorBuilder.warning(message, method);
            result.push(error);
        }
        return result;
    }
    checkArgumentsType(method, methodSymbol) {
        let errors = [];
        methodSymbol.arguments.forEach((arg, position) => {
            if (method.args[position]) {
                let argumentValidator = new ArgumentSemanticValidator(arg, this.symbolTable);
                errors.push(...method.args[position].accept(argumentValidator));
            }
        });
        return errors;
    }
    extractMethodFromVariable(variable, method) {
        let classSymbol = variable.type;
        if (classSymbol instanceof symbols_1.ClassSymbol) {
            return this.extractMethodFromClass(classSymbol, method);
        }
        return null;
    }
    extractMethodFromClass(classSymbol, method) {
        return classSymbol.methods.find(symbol => symbol.name === method);
    }
}
class ArgumentSemanticValidator {
    constructor(requiredArgument, symbolTable) {
        this.requiredArgument = requiredArgument;
        this.symbolTable = symbolTable;
    }
    defaultValue() {
        return [];
    }
    visitExpression(expression) {
        let contenatingErrors = (a, b) => {
            if (b === null) {
                return a;
            }
            return a.concat(b.accept(this));
        };
        return expression.terms.reduce(contenatingErrors, []);
    }
    visitVariableReference(variable) {
        let variableSymbol = this.symbolTable.lookup(variable.value, variable.start.line);
        if (variableSymbol === null) {
            return [];
        }
        if (variableSymbol instanceof symbols_1.VariableSymbol) {
            return this.checkVariableType(variable, variableSymbol, variable.value);
        }
        return [];
    }
    visitArrayReference(arrayReference) {
        let variableSymbol = this.symbolTable.lookup(arrayReference.variable, arrayReference.start.line);
        if (variableSymbol === null) {
            return [];
        }
        if (variableSymbol instanceof symbols_1.VariableSymbol) {
            let result = [];
            result.push(...this.checkVariableType(arrayReference, variableSymbol, arrayReference.variable));
            result.push(...this.checkArrayPosition(arrayReference, variableSymbol));
            return result;
        }
        return [];
    }
    checkVariableType(item, variableSymbol, name) {
        if (variableSymbol.type !== this.requiredArgument.type) {
            let expectedType = this.requiredArgument.type.getName();
            // checks on primitive types should be avoided because this kind of variables are not properly
            // registered at the symbol table
            let symbol = this.symbolTable.lookup(expectedType, item.start.line);
            if (symbol === null || symbol instanceof symbols_2.BuiltInTypeSymbol) {
                return [];
            }
            let errorMessage = `Expecting argument of type ${expectedType}, but ${name} doesn't match it`;
            return [errorBuilder_1.ErrorBuilder.warning(errorMessage, item)];
        }
        return [];
    }
    checkArrayPosition(variable, variableSymbol) {
        if (variableSymbol.hasSize() && variable.index >= variableSymbol.size()) {
            let message = `Position ${variable.index} is not valid at ${variable.variable}`;
            return [errorBuilder_1.ErrorBuilder.warning(message, variable)];
        }
        return [];
    }
}
class ExpressionAnalysis {
    constructor() {
        this.errors = [];
    }
}
//# sourceMappingURL=semanticAnalyzer.js.map