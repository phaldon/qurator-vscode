/**
 * This ts file provides the validation of tree.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("antlr4ts/tree");
const validations_1 = require("./validations/validations");
const positionAdapter_1 = require("../../tools/positionAdapter");
var SemanticAnalyzer;
(function (SemanticAnalyzer) {
    function analyze(tree, symbolTable, errorListener) {
        let validator = new SemanticValidator(symbolTable, errorListener);
        tree.accept(validator);
    }
    SemanticAnalyzer.analyze = analyze;
})(SemanticAnalyzer = exports.SemanticAnalyzer || (exports.SemanticAnalyzer = {}));
class SemanticValidator extends tree_1.AbstractParseTreeVisitor {
    constructor(symbolTable, errorListener) {
        super();
        this.symbolTable = symbolTable;
        this.errorListener = errorListener;
    }
    defaultResult() { }
    visitQrunes(ctx) {
        if (ctx.lang_unit().length === 0) {
            return;
        }
        let validator = new SentenceValidator(this.symbolTable, this.errorListener);
        for (let unit of ctx.lang_unit()) {
            unit.accept(validator);
        }
    }
}
class SentenceValidator extends tree_1.AbstractParseTreeVisitor {
    constructor(symbolTable, errorListener) {
        super();
        this.symbolTable = symbolTable;
        this.errorListener = errorListener;
        this.rulesValidator = new validations_1.SemanticRulesValidator(this.symbolTable, this.errorListener);
    }
    defaultResult() { }
    // Function declaration validation, the main process is the validation of args and it's types.
    visitFunc_declaration(ctx) {
        let method = ctx.func_declarator().Identifier();
        let methodName = method.text;
        let position = positionAdapter_1.PositionAdapter.fromTerminalNode(method);
        let nameAndType = null;
        if (ctx.func_declarator().args_type_List() !== undefined) {
            nameAndType = this.getArgsAndType(ctx.func_declarator().args_type_List());
        }
        let names = null;
        let types = null;
        if (nameAndType !== null && nameAndType.names !== null) {
            names = nameAndType.names.reverse();
        }
        if (nameAndType !== null && nameAndType.types !== null) {
            types = nameAndType.types.reverse();
        }
        this.rulesValidator.validate([
            new validations_1.ExistingDefinationValidationRule(methodName, position, names, types)
        ]);
    }
    getArgsAndType(ctx) {
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
}
//# sourceMappingURL=semanticAnalyzer.js.map