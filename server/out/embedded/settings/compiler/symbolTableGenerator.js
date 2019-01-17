/**
 * This ts file provides the generators of symbol table for setting
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("antlr4ts/tree");
const symbolTable_1 = require("./symbolTable");
const validations_1 = require("./validations/validations");
const errorListener_1 = require("../../tools/errorListener");
const positionAdapter_1 = require("../../tools/positionAdapter");
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
    }
    defaultResult() { }
    visitLan_set(ctx) {
        this.previousDefinitionValidation.apply("lang", ctx.LANGUAGE().text, positionAdapter_1.PositionAdapter.fromTerminalNode(ctx.LANGUAGE()));
        let LanguageSet = "lang";
        let LanguageType = this.symbolTable.lookup('language');
        let language = new symbolTable_1.SettingSymbol(LanguageSet, LanguageType);
        this.symbolTable.define(language, ctx.start.line);
        if (ctx.lan_type() !== undefined) {
            let lan_name = ctx.lan_type();
            if (lan_name.text !== '' && lan_name.text !== 'Python' && lan_name.text !== 'C++') {
                this.previousDefinitionValidation.applyNotSupported(lan_name.text, positionAdapter_1.PositionAdapter.fromToken(lan_name._start));
            }
        }
    }
    visitAuto_import(ctx) {
        this.previousDefinitionValidation.apply("auto", ctx.AUTOIMPORT().text, positionAdapter_1.PositionAdapter.fromTerminalNode(ctx.AUTOIMPORT()));
        let AutoImportSet = "auto";
        let AutoImportType = this.symbolTable.lookup('autoimport');
        let autoimport = new symbolTable_1.SettingSymbol(AutoImportSet, AutoImportType);
        this.symbolTable.define(autoimport, ctx.start.line);
        if (ctx.ischoosed() !== undefined) {
            let choose_name = ctx.ischoosed();
            if (choose_name.text !== '' && choose_name.text !== 'True' && choose_name.text !== 'False') {
                this.previousDefinitionValidation.applyNotSupported(choose_name.text, positionAdapter_1.PositionAdapter.fromToken(choose_name._start));
            }
        }
    }
}
//# sourceMappingURL=symbolTableGenerator.js.map