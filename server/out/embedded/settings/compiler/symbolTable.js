/**
 * This ts file provides the symbol table of setting
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const scope_1 = require("../../compiler/scope");
const symbols_1 = require("../../compiler/symbols");
const multiScopeSymbolTable_1 = require("../../compiler/multiScopeSymbolTable");
var SymbolTableBuilder;
(function (SymbolTableBuilder) {
    function build() {
        let rootScope = new scope_1.Scope(null, 'global');
        rootScope.define(new symbols_1.BuiltInTypeSymbol(SettingSymbols.language), 0);
        rootScope.define(new symbols_1.BuiltInTypeSymbol(SettingSymbols.autoimport), 0);
        return new multiScopeSymbolTable_1.MultiScopeSymbolTable(rootScope);
    }
    SymbolTableBuilder.build = build;
})(SymbolTableBuilder = exports.SymbolTableBuilder || (exports.SymbolTableBuilder = {}));
class SettingSymbol extends symbols_1.Symbol {
    constructor(name, type) {
        super(name, type);
    }
    toString() {
        return `{ name: ${this.name}, type: ${this.type} }`;
    }
}
exports.SettingSymbol = SettingSymbol;
var SettingSymbols;
(function (SettingSymbols) {
    SettingSymbols["language"] = "language";
    SettingSymbols["autoimport"] = "autoimport";
})(SettingSymbols = exports.SettingSymbols || (exports.SettingSymbols = {}));
//# sourceMappingURL=symbolTable.js.map