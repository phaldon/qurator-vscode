/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../compiler/symbols");
const qpandaSymbolTableBuilder_1 = require("../compiler/qpandaSymbolTableBuilder");
var SymbolTableGenerator;
(function (SymbolTableGenerator) {
    function symbolTableFor(codeBlock) {
        let symbolTable = qpandaSymbolTableBuilder_1.PyQpandaSymbolTableBuilder.create();
        codeBlock.childs.forEach(block => {
            let updater = new StatementSymbolTableUpdater(symbolTable);
            block.accept(updater);
        });
        return symbolTable;
    }
    SymbolTableGenerator.symbolTableFor = symbolTableFor;
})(SymbolTableGenerator = exports.SymbolTableGenerator || (exports.SymbolTableGenerator = {}));
class StatementSymbolTableUpdater {
    constructor(symbolTable) {
        this.symbolTable = symbolTable;
    }
    defaultValue() { }
    visitCodeBlock(block) {
        const MAX_LINE = 65536;
        this.symbolTable.push('local', block.start.line, MAX_LINE);
        block.childs.map(innerBlock => innerBlock.accept(new StatementSymbolTableUpdater(this.symbolTable)));
        this.symbolTable.pop(block.end.line);
    }
    visitStatement(statement) {
        if (statement.expression === null) {
            return;
        }
        let updater = new AssignmentSymbolTableUpdater(this.symbolTable);
        statement.expression.accept(updater);
    }
}
class AssignmentSymbolTableUpdater {
    constructor(symbolTable) {
        this.symbolTable = symbolTable;
    }
    defaultValue() {
        return {
            type: this.symbolTable.lookup(symbols_1.PyQpandaSymbols.void)
        };
    }
    visitAssignment(assignment) {
        let variable = this.unwrapVariable(assignment.left);
        if (variable !== null && assignment.right) {
            let invocationData = assignment.right.accept(this);
            let symbol = new symbols_1.VariableSymbol(variable, invocationData.type, invocationData.metadata);
            this.symbolTable.define(symbol, assignment.start.line);
            return invocationData;
        }
        return this.symbolTable.lookup(symbols_1.PyQpandaSymbols.void);
    }
    visitExpression(expression) {
        let lookingForTrailingType = (a, b) => {
            // in partial compilations this case could happen *do not delete without thinking twice*
            if (b === null) {
                return a;
            }
            if (a === null || a.type === null) {
                return b.accept(this);
            }
            if (a.type instanceof symbols_1.ClassSymbol) {
                let unwrapper = new MethodCallUnwrapper(a.type, this.symbolTable);
                return b.accept(unwrapper);
            }
            return a;
        };
        let defaultResult = this.symbolTable.lookup('void');
        return expression.terms.reduce(lookingForTrailingType, defaultResult);
    }
    visitVariableReference(reference) {
        return {
            type: this.theClassTypeOf(this.symbolTable.lookup(reference.value))
        };
    }
    visitMethodReference(reference) {
        let classSymbol = this.theClassTypeOf(this.symbolTable.lookup(reference.name));
        return {
            type: classSymbol,
            metadata: this.unwrapMetadata(classSymbol, reference)
        };
    }
    unwrapVariable(item) {
        let unwrapper = new VariableUnwrapper();
        return item.accept(unwrapper);
    }
    theClassTypeOf(currentType) {
        if (currentType instanceof symbols_1.VariableSymbol) {
            return this.theClassTypeOf(currentType.type);
        }
        return currentType;
    }
    unwrapMetadata(classSymbol, reference) {
        if (classSymbol instanceof symbols_1.ClassSymbol) {
            let metadata = {};
            let argumentUnwrapper = new ArgumentUnwrapper();
            classSymbol.requiredArguments.forEach((arg, position) => {
                if (reference.args[position]) {
                    // TODO convert to real metadata { name: 'size' , value: 'unwrappedValue' }
                    if (arg.getName() === 'size') {
                        metadata.size = reference.args[position].accept(argumentUnwrapper);
                    }
                    if (arg.getName() === 'name') {
                        metadata.name = reference.args[position].accept(argumentUnwrapper);
                    }
                }
            });
            return metadata;
        }
        return null;
    }
}
class VariableUnwrapper {
    defaultValue() {
        return null;
    }
    visitExpression(expression) {
        return expression.terms.reduce((a, b) => (a === null ? b.accept(this) : a), null);
    }
    visitVariableReference(variable) {
        return variable.value;
    }
}
class ArgumentUnwrapper {
    defaultValue() {
        return null;
    }
    visitExpression(expression) {
        return expression.terms.reduce((a, b) => (a === null ? b.accept(this) : a), null);
    }
    visitFloat(item) {
        return item.value;
    }
    visitInteger(item) {
        return item.value;
    }
    visitText(item) {
        return item.value;
    }
}
class MethodCallUnwrapper {
    constructor(currentType, symbolTable) {
        this.currentType = currentType;
        this.symbolTable = symbolTable;
    }
    defaultValue() {
        return {
            type: this.symbolTable.lookup(symbols_1.PyQpandaSymbols.void)
        };
    }
    visitMethodReference(reference) {
        let method = this.currentType.methods.find(method => method.name === reference.name);
        if (method) {
            return {
                type: method.type,
                metadata: this.unwrapMetadata(method, reference)
            };
        }
        return this.defaultValue();
    }
    unwrapMetadata(methodSymbol, reference) {
        if (methodSymbol instanceof symbols_1.MethodSymbol) {
            let metadata = {};
            let argumentUnwrapper = new ArgumentUnwrapper();
            methodSymbol.arguments.forEach((arg, position) => {
                if (reference.args[position]) {
                    // TODO convert to real metadata { name: 'size' , value: 'unwrappedValue' }
                    if (arg.getName() === 'size') {
                        metadata.size = reference.args[position].accept(argumentUnwrapper);
                    }
                    if (arg.getName() === 'name') {
                        metadata.name = reference.args[position].accept(argumentUnwrapper);
                    }
                }
            });
            return metadata;
        }
        return null;
    }
}
//# sourceMappingURL=symbolTableGenerator.js.map