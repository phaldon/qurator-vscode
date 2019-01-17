/**
 * This ts file provides the generators of symbol table and the validation of tree.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("antlr4ts/tree");
const symbolTable_1 = require("./symbolTable");
const validations_1 = require("./validations/validations");
const positionAdapter_1 = require("../../tools/positionAdapter");
const errorListener_1 = require("../../tools/errorListener");
const scope_1 = require("../../compiler/scope");
// Build symbol table and add matcher to tree.
var SymbolTableGenerator;
(function (SymbolTableGenerator) {
    function symbolTableFor(tree, _errorListener) {
        let symbolTable = symbolTable_1.SymbolTableBuilder.build();
        let errorListener = _errorListener || new errorListener_1.ErrorListener();
        let matcher = new DefinitionMatcher(symbolTable, errorListener);
        tree.accept(matcher);
        return symbolTable;
    }
    SymbolTableGenerator.symbolTableFor = symbolTableFor;
})(SymbolTableGenerator = exports.SymbolTableGenerator || (exports.SymbolTableGenerator = {}));
class DefinitionMatcher extends tree_1.AbstractParseTreeVisitor {
    constructor(symbolTable, errorListener) {
        super();
        this.symbolTable = symbolTable;
        this.errorListener = errorListener;
        this.previousDefinitionValidation = new validations_1.PreviousDefinitionValidation(this.symbolTable, this.errorListener);
        this.previousFunctionValidation = new validations_1.PreviousFunctionValidation(this.symbolTable, this.errorListener);
        this.previousNotDefinitionValidation = new validations_1.PreviousNotDefinitionValidation(this.symbolTable, this.errorListener);
        this.previousFunctionDefinationValidation = new validations_1.PreviousFunctionDefinationValidation(this.symbolTable, this.errorListener);
    }
    defaultResult() { }
    // Function declaration validation, the main process is adding scope (including parameters and types) 
    // to symbol table, repeated validations.
    visitFunc_declaration(ctx) {
        let startLine = ctx.func_declarator().Identifier().symbol.line;
        let endLine = startLine;
        let methodId = ctx.func_declarator().Identifier();
        let methodName = methodId.text + '_define';
        this.previousFunctionDefinationValidation.apply(methodName, positionAdapter_1.PositionAdapter.fromTerminalNode(methodId));
        let nameAndType = null;
        if (ctx.func_declarator().args_type_List() !== undefined) {
            nameAndType = this.addArgsAndType(ctx.func_declarator().args_type_List());
        }
        let currScope = null;
        if (nameAndType !== null) {
            currScope = new scope_1.Scope(this.symbolTable.currentScope, methodName, startLine, endLine, nameAndType.names.reverse(), nameAndType.types.reverse());
        }
        else {
            currScope = new scope_1.Scope(this.symbolTable.currentScope, methodName, startLine, endLine);
        }
        this.symbolTable.pushList(currScope);
        this.visitChildren(ctx);
    }
    // Function defination validation, the main process is adding scope (including parameters and types) 
    // to symbol table, repeated validations.
    visitFunc_definition(ctx) {
        let startLine = ctx.func_declarator().Identifier().symbol.line;
        let endLine = this.validSymbol(ctx.comp_stmt(), ctx.func_declarator());
        let methodId = ctx.func_declarator().Identifier();
        let methodName = methodId.text + '_method';
        this.previousFunctionValidation.apply(methodName, positionAdapter_1.PositionAdapter.fromTerminalNode(methodId));
        let nameAndType = null;
        if (ctx.func_declarator().args_type_List() !== undefined) {
            nameAndType = this.addArgsAndType(ctx.func_declarator().args_type_List());
        }
        let currScope = null;
        if (nameAndType !== null) {
            currScope = new scope_1.Scope(this.symbolTable.currentScope, methodName, startLine, endLine, nameAndType.names.reverse(), nameAndType.types.reverse());
        }
        else {
            currScope = new scope_1.Scope(this.symbolTable.currentScope, methodName, startLine, endLine);
        }
        this.symbolTable.pushList(currScope);
        this.visitChildren(ctx);
    }
    // Iteration validation, it's mainly the validation of for-loop, the main process is 
    // adding scope to symbol table.
    visitIterate_stmt(ctx) {
        let startLine = ctx.FOR().symbol.line;
        let endLine = this.validSymbol(ctx.statement().comp_stmt(), ctx.FOR());
        let forName = ctx.FOR().text;
        let scopes = this.symbolTable.currentScopes;
        let currentScope = this.getScope(scopes, startLine);
        let IterateScope = new scope_1.Scope(currentScope, forName, startLine, endLine);
        this.symbolTable.pushList(IterateScope);
        this.visitChildren(ctx);
    }
    // Declaration validation, the main process is adding validation to variables or arrays.
    visitDeclaration(ctx) {
        let specifier = ctx.declaration_Specifier();
        if (specifier !== undefined) {
            let declaratorList = ctx.init_DeclaratorList().init_Declarator();
            if (declaratorList.childCount > 0) {
                let declarator = declaratorList.declarator();
                if (declarator.declarator() === undefined) {
                    let terminalNode = ctx.init_DeclaratorList().init_Declarator().declarator().Identifier();
                    let size = [-1];
                    this.validDeclaration(ctx, terminalNode, specifier.text, size);
                }
                else {
                    let declaratorOld = declarator;
                    let declaratorNew = declarator;
                    let sizes = [];
                    for (let i = 0; i < 10; i++) {
                        declaratorOld = declaratorNew;
                        declaratorNew = declaratorNew.declarator();
                        if (declaratorOld.assignment_exp() !== undefined) {
                            let sizeString = declaratorOld.assignment_exp().text;
                            let size = parseInt(sizeString);
                            sizes.push(size);
                        }
                        if (declaratorNew === undefined) {
                            let terminalNode = declaratorOld.Identifier();
                            if (sizes.length <= 0) {
                                sizes = [-1];
                            }
                            this.validDeclaration(ctx, terminalNode, symbolTable_1.QcodesSymbols.array, sizes.reverse());
                            break;
                        }
                    }
                }
            }
        }
        this.visitChildren(ctx);
    }
    visitLiteral_declaration(ctx) {
        let specifier = ctx.literal_type();
        if (specifier !== undefined) {
            let declaratorList = ctx.init_Literal_DeclaratorList().init_Literal_Declarator();
            if (declaratorList.childCount > 0) {
                let declarator = declaratorList.declarator();
                if (declarator.declarator() === undefined) {
                    let terminalNode = ctx.init_Literal_DeclaratorList().init_Literal_Declarator().declarator().Identifier();
                    let size = [-1];
                    this.validDeclaration(ctx, terminalNode, specifier.text, size);
                }
                else {
                    let declaratorOld = declarator;
                    let declaratorNew = declarator;
                    let sizes = [];
                    for (let i = 0; i < 10; i++) {
                        declaratorOld = declaratorNew;
                        declaratorNew = declaratorNew.declarator();
                        if (declaratorOld.assignment_exp() !== undefined) {
                            let sizeString = declaratorOld.assignment_exp().text;
                            let size = parseInt(sizeString);
                            sizes.push(size);
                        }
                        if (declaratorNew === undefined) {
                            let terminalNode = declaratorOld.Identifier();
                            if (sizes.length <= 0) {
                                sizes = [-1];
                            }
                            this.validDeclaration(ctx, terminalNode, symbolTable_1.QcodesSymbols.array, sizes.reverse());
                            break;
                        }
                    }
                }
            }
        }
    }
    // Function args validation, the main process is repeated validation and 
    // adding symbol to current scope.
    visitArgs_declaration(ctx) {
        let declarator = ctx.declarator();
        let specifier = ctx.declaration_Specifier();
        if (declarator !== undefined && specifier !== undefined) {
            let args = declarator.Identifier();
            if (args !== undefined) {
                let scopes = this.symbolTable.currentScopes;
                let line = args.symbol.line;
                let currentScope = this.getScope(scopes, line);
                this.previousDefinitionValidation.applyScope(currentScope, args.text, positionAdapter_1.PositionAdapter.fromTerminalNode(args));
                let registerName = args.text;
                let registerType = this.symbolTable.lookup(specifier.text);
                let size = [-1];
                let register = new symbolTable_1.RegisterSymbol(registerName, registerType, size);
                this.symbolTable.defineList(currentScope, register, ctx.start.line);
            }
        }
    }
    // For-loop parameter validation, the main process is repeated validation and 
    // adding symbol to current scope.
    visitFor_stmt(ctx) {
        let forStart = ctx.for_start();
        if (ctx.childCount >= 1) {
            if (forStart !== undefined && forStart.text !== "") {
                let primaryStart = forStart.primary_exp();
                if (primaryStart !== undefined) {
                    let start = primaryStart.Identifier();
                    let size = [-1];
                    if (start !== undefined) {
                        this.validUnary(start, symbolTable_1.QcodesSymbols.let, size);
                    }
                }
            }
        }
        if (ctx.childCount >= 2) {
            let forStep = ctx.for_step();
            if (forStep !== undefined && forStep.text !== "") {
                let assignmentStep = forStep.assignment_exp();
                if (assignmentStep !== undefined) {
                    this.visitChildren(assignmentStep);
                }
            }
        }
        if (ctx.childCount >= 3) {
            let forEnd = ctx.for_end();
            if (forEnd !== undefined && forEnd.text !== "") {
                let assignmentEnd = forEnd.assignment_exp();
                if (assignmentEnd !== undefined) {
                    this.visitChildren(assignmentEnd);
                }
            }
        }
    }
    // Q_if parameter validation, the main process is repeated validation of cvec.
    visitQ_if_operation(ctx) {
        let condition = ctx.q_condition();
        let items = [];
        if (condition !== undefined && condition.text !== "") {
            let conditionText = condition.text;
            if (conditionText.indexOf('[') != -1) {
                let pattern = /\w+/g;
                let names = pattern.exec(conditionText);
                if (names.length > 0) {
                    let name = names[0];
                    let line = condition._start.line;
                    let scopes = this.symbolTable.currentScopes;
                    let currentScope = this.getScope(scopes, line);
                    this.previousDefinitionValidation.applyCvec(currentScope, name, positionAdapter_1.PositionAdapter.fromToken(condition._start), symbolTable_1.QcodesSymbols.cvec);
                }
            }
            this.visitChildren(ctx.q_condition());
        }
    }
    // Q_while parameter validation, the main process is repeated validation of cvec.
    visitQ_while_operation(ctx) {
        let condition = ctx.q_condition();
        if (condition !== undefined && condition.text !== "") {
            let conditionText = condition.text;
            if (conditionText.indexOf('[') != -1) {
                let pattern = /\w+/g;
                let names = pattern.exec(conditionText);
                if (names.length > 0) {
                    let name = names[0];
                    let line = condition._start.line;
                    let scopes = this.symbolTable.currentScopes;
                    let currentScope = this.getScope(scopes, line);
                    this.previousDefinitionValidation.applyCvec(currentScope, name, positionAdapter_1.PositionAdapter.fromToken(condition._start), symbolTable_1.QcodesSymbols.cvec);
                }
            }
            this.visitChildren(ctx);
        }
    }
    // Select validation, it's mainly the validation of if statement, the main process is
    // adding scopes(if, else if, else) to symbol table.
    visitSelect_stmt(ctx) {
        let selects = ctx.statement();
        if (selects.length === 1) {
            let currentScope = this.selectScopeIf(ctx, 0);
            this.symbolTable.pushList(currentScope);
        }
        else if (selects.length === 2) {
            let currentScopeIf = this.selectScopeIf(ctx, 0);
            let currentScopeElse = this.selectScopeElse(ctx, 1);
            this.symbolTable.pushList(currentScopeIf);
            if (currentScopeElse != null) {
                this.symbolTable.pushList(currentScopeElse);
            }
        }
        this.visitChildren(ctx);
    }
    // Unary validation, the main process is the repeated validation of 
    // variables, arrays and method call.
    visitUnary_exp(ctx) {
        let unary = ctx.unary_exp();
        if (unary != undefined) {
            this.visitChildren(ctx.unary_exp());
        }
        else {
            let postfix = ctx.postfix_exp();
            let trueNum = 0;
            if (postfix.childCount > 0) {
                for (let child of postfix.children) {
                    if (child.text === '[') {
                        trueNum = 1;
                        break;
                    }
                    else if (child.text === '(') {
                        trueNum = 2;
                        break;
                    }
                }
            }
            if (postfix.childCount > 2 && trueNum === 1) {
                let primaryOld = postfix;
                let primaryNew = postfix;
                let sizes = [];
                for (let i = 0; i < 10; i++) {
                    primaryOld = primaryNew;
                    primaryNew = primaryNew.postfix_exp();
                    if (primaryOld.expression() !== undefined) {
                        for (let exp of primaryOld.expression()) {
                            let sizeString = exp.text;
                            let size = parseInt(sizeString);
                            sizes.push(size);
                            this.visitChildren(exp);
                        }
                    }
                    if (primaryNew === undefined) {
                        let terminalNode = primaryOld.primary_exp().Identifier();
                        if (sizes.length <= 0) {
                            sizes = [-1];
                        }
                        this.validUnary(terminalNode, symbolTable_1.QcodesSymbols.array, sizes.reverse());
                        break;
                    }
                }
            }
            else {
                let postfixExp = postfix.postfix_exp();
                if (postfixExp !== undefined && trueNum !== 2) {
                    let primaryTwo = postfix.postfix_exp().primary_exp().Identifier();
                    if (primaryTwo !== undefined) {
                        let sizes = [-1];
                        this.validUnary(primaryTwo, symbolTable_1.QcodesSymbols.let, sizes);
                    }
                }
                else {
                    if (trueNum === 2) {
                        let argumentTwo = postfix.argument_exp_List();
                        let postExp = postfix.postfix_exp();
                        if (postExp !== undefined) {
                            let lenMethod = postExp.primary_exp().LEN();
                            if (lenMethod === undefined) {
                                let method = postExp.primary_exp().Identifier();
                                this.validFunction(method);
                                if (postfix.argument_exp_List() !== undefined) {
                                    this.validArgument(postExp.primary_exp().Identifier().text, postfix.argument_exp_List());
                                }
                            }
                        }
                        if (argumentTwo !== undefined) {
                            this.visitChildren(ctx);
                        }
                    }
                    else {
                        let primaryTwo = postfix.primary_exp().Identifier();
                        if (primaryTwo !== undefined) {
                            let sizes = [-1];
                            this.validUnary(primaryTwo, symbolTable_1.QcodesSymbols.let, sizes);
                        }
                    }
                }
            }
        }
    }
    // Quantum gate validation, the main process is the repeated validation of 
    // control gate, double gate, four args.
    visitQuantum_gate_stmt(ctx) {
        let quantum = ctx.quantum_gate_operation();
        if (quantum !== undefined) {
            let controlGate = quantum.control_gate_exp();
            if (controlGate !== undefined && controlGate.text !== '') {
                if (controlGate.childCount <= 1) {
                    let ident = controlGate.Identifier();
                    this.validUnary(ident, symbolTable_1.QcodesSymbols.let, [-1]);
                }
                else {
                    if (controlGate.Identifier() !== undefined) {
                        this.validQuantum(controlGate.Identifier(), symbolTable_1.QcodesSymbols.qvec);
                    }
                    if (controlGate.expression() !== undefined) {
                        this.visitChildren(controlGate.expression());
                    }
                }
            }
            let doubleGate = quantum.double_gate_exp();
            if (doubleGate !== undefined && doubleGate.text !== '' && doubleGate.text !== ')') {
                let doubleControlGate = doubleGate.control_gate_exp();
                if (doubleControlGate !== undefined) {
                    if (doubleControlGate.childCount <= 1) {
                        let ident = doubleControlGate.Identifier();
                        this.validUnary(ident, symbolTable_1.QcodesSymbols.let, [-1]);
                    }
                    else {
                        if (doubleControlGate.Identifier() !== undefined) {
                            this.validQuantum(doubleControlGate.Identifier(), symbolTable_1.QcodesSymbols.qvec);
                        }
                        if (doubleControlGate.expression() !== undefined) {
                            this.visitChildren(doubleControlGate.expression());
                        }
                    }
                }
                let targetGate = doubleGate.target_gate_exp();
                if (targetGate !== undefined) {
                    if (targetGate.childCount <= 1) {
                        let ident = targetGate.Identifier();
                        this.validUnary(ident, symbolTable_1.QcodesSymbols.let, [-1]);
                    }
                    else {
                        if (targetGate.Identifier() !== undefined) {
                            this.validQuantum(targetGate.Identifier(), symbolTable_1.QcodesSymbols.qvec);
                        }
                        if (targetGate.expression() !== undefined) {
                            this.visitChildren(targetGate.expression());
                        }
                    }
                }
            }
            let fourArgs = quantum.four_angle_args();
            if (fourArgs !== undefined) {
                if (this.isEmpty(fourArgs.alpha()) && this.isEmpty(fourArgs.beta()) &&
                    this.isEmpty(fourArgs.gamma()) && this.isEmpty(fourArgs.delta())) {
                    this.visitChildren(quantum.four_angle_args());
                }
            }
            let expression = quantum.expression();
            if (expression !== undefined) {
                this.visitChildren(quantum.expression());
            }
        }
    }
    // Measurement validation, the main process is repeated validation of args.
    visitMeasurement_stmt(ctx) {
        let controlGate = ctx.control_gate_exp();
        let cbitGate = ctx.accept_cbit_stmt();
        if (controlGate !== undefined && controlGate.text !== '') {
            if (controlGate.childCount <= 1) {
                let ident = controlGate.Identifier();
                this.validUnary(ident, symbolTable_1.QcodesSymbols.let, [-1]);
            }
            else {
                if (controlGate.Identifier() !== undefined) {
                    this.validQuantum(controlGate.Identifier(), symbolTable_1.QcodesSymbols.qvec);
                }
                if (controlGate.expression() !== undefined) {
                    this.visitChildren(controlGate.expression());
                }
            }
        }
        if (cbitGate !== undefined && cbitGate.text !== '') {
            if (cbitGate.childCount <= 1) {
                let ident = cbitGate.Identifier();
                this.validUnary(ident, symbolTable_1.QcodesSymbols.let, [-1]);
            }
            else {
                if (cbitGate.Identifier() !== undefined) {
                    this.validQuantum(cbitGate.Identifier(), symbolTable_1.QcodesSymbols.cvec);
                }
                if (cbitGate.expression() !== undefined) {
                    this.visitChildren(cbitGate.expression());
                }
            }
        }
    }
    isEmpty(obj) {
        if (obj !== undefined && obj.text !== '') {
            return true;
        }
        return false;
    }
    // Validation of if-statement, the main process is adding scope to select statement.
    selectScopeIf(ctx, index) {
        let startLine = ctx.statement(index)._start.line;
        let endLine = this.validSymbol(ctx.statement(index).comp_stmt(), ctx.IF());
        let ifName = ctx.IF().text;
        let scopes = this.symbolTable.currentScopes;
        let currentScope = this.getScope(scopes, startLine);
        let selectScope = new scope_1.Scope(currentScope, ifName, startLine, endLine);
        return selectScope;
    }
    // Validation of else-statement, the main process is adding scope to select statement.
    selectScopeElse(ctx, index) {
        let text = ctx.statement(index).text;
        let regex = /.*if\s*\(.*/;
        let match = text.match(regex);
        if (match) {
            return null;
        }
        let startLine = ctx.statement(index)._start.line;
        let endLine = this.validSymbol(ctx.statement(index).comp_stmt(), ctx.ELSE());
        let ifName = ctx.ELSE().text;
        let scopes = this.symbolTable.currentScopes;
        let currentScope = this.getScope(scopes, startLine);
        let selectScopeElse = new scope_1.Scope(currentScope, ifName, startLine, endLine);
        return selectScopeElse;
    }
    // Get the current scope.
    getScope(scopes, startLine) {
        let map = new Map();
        if (scopes.length > 0) {
            for (let sc of scopes) {
                if (sc.startLine <= startLine && sc.endLine >= startLine) {
                    map.set(sc.startLine, sc);
                }
            }
        }
        let num = 0;
        if (map.size > 0) {
            for (let s of map.keys()) {
                if (s > num) {
                    num = s;
                }
            }
            return map.get(num);
        }
        return null;
    }
    // Validation of declaration and literal_declaration, the main process is repeated validation and 
    // adding symbol to current scope
    validDeclaration(ctx, ident, type, sizes) {
        let scopes = this.symbolTable.currentScopes;
        let line = ident.symbol.line;
        let currentScope = this.getScope(scopes, line);
        this.previousDefinitionValidation.applyScope(currentScope, ident.text, positionAdapter_1.PositionAdapter.fromTerminalNode(ident));
        let registerName = ident.text;
        let registerType = this.symbolTable.lookup(type);
        let register = new symbolTable_1.RegisterSymbol(registerName, registerType, sizes);
        this.symbolTable.defineList(currentScope, register, ctx.start.line);
    }
    // Validation of unary, the main process is repeated validation of unary.
    validUnary(ident, type, sizes) {
        let line = ident.symbol.line;
        let scopes = this.symbolTable.currentScopes;
        let currentScope = this.getScope(scopes, line);
        this.previousNotDefinitionValidation.apply(currentScope, ident.text, positionAdapter_1.PositionAdapter.fromTerminalNode(ident), type, sizes);
    }
    // Validation of quantum, the main process is repeated validation of quantum.
    validQuantum(ident, type) {
        let line = ident.symbol.line;
        let scopes = this.symbolTable.currentScopes;
        let currentScope = this.getScope(scopes, line);
        this.previousDefinitionValidation.applyQuantum(currentScope, ident.text, positionAdapter_1.PositionAdapter.fromTerminalNode(ident), type);
    }
    // Validation of function, the main process is repeated validation of function.
    validFunction(ident) {
        this.previousFunctionValidation.applyNotFunction(ident.text, positionAdapter_1.PositionAdapter.fromTerminalNode(ident));
    }
    // Validation of argument, the main process is repeated validation of arguments.
    validArgument(methodName, ctx) {
        let argsNew = ctx;
        let args = [];
        let positions = [];
        for (let i = 0; i < 10; i++) {
            if (argsNew !== undefined) {
                let arg = argsNew.assignment_exp().text;
                args.push(arg);
                let pos = positionAdapter_1.PositionAdapter.fromToken(argsNew.assignment_exp()._start);
                positions.push(pos);
                argsNew = argsNew.argument_exp_List();
            }
            else {
                break;
            }
        }
        if (args.length > 0) {
            let scopes = this.symbolTable.currentScopes;
            let line = ctx._start.line;
            let currentScope = this.getScope(scopes, line);
            this.previousFunctionDefinationValidation.applyArgs(currentScope, methodName, args.reverse(), positions.reverse());
        }
    }
    // Add args and types to scope.
    addArgsAndType(ctx) {
        let argsNew = ctx;
        let argsName = [];
        let argsType = [];
        for (let i = 0; i < 10; i++) {
            if (argsNew !== undefined && argsNew.args_declaration() !== undefined) {
                let argType = argsNew.args_declaration().declaration_Specifier().text;
                let argName = argsNew.args_declaration().declarator().text;
                argsName.push(argName);
                argsType.push(argType);
                argsNew = argsNew.args_type_List();
            }
            else {
                break;
            }
        }
        return {
            names: argsName,
            types: argsType
        };
    }
    // Validation the exists of braces.
    validSymbol(comp_stmt, node) {
        let flagLeft = false;
        let flagRight = false;
        let endLine = 65536;
        if (comp_stmt === undefined) {
            flagLeft = true;
            flagRight = true;
            if (node instanceof tree_1.TerminalNode) {
                this.previousNotDefinitionValidation.applySymbol(positionAdapter_1.PositionAdapter.fromTerminalNode(node), '{');
            }
            else {
                this.previousNotDefinitionValidation.applySymbol(positionAdapter_1.PositionAdapter.fromToken(node._start), '{');
            }
        }
        else {
            if (comp_stmt.childCount > 0) {
                for (let node of comp_stmt.children) {
                    if (node.text == '{') {
                        flagLeft = true;
                    }
                    if (node.text === '}') {
                        endLine = comp_stmt.RBRACE().symbol.line;
                        flagRight = true;
                        break;
                    }
                }
            }
        }
        if (!flagLeft) {
            this.previousNotDefinitionValidation.applySymbol(positionAdapter_1.PositionAdapter.fromToken(comp_stmt._start), '{');
        }
        if (!flagRight) {
            this.previousNotDefinitionValidation.applySymbol(positionAdapter_1.PositionAdapter.fromTerminalNode(comp_stmt.LBRACE()), '}');
        }
        return endLine;
    }
}
//# sourceMappingURL=symbolTableGenerator.js.map