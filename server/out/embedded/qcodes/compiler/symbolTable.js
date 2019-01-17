/**
 * This ts file provides the build of symbol table and interfaces of symbol table.
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
        rootScope.define(new symbols_1.BuiltInTypeSymbol(QcodesSymbols.qvec), 0);
        rootScope.define(new symbols_1.BuiltInTypeSymbol(QcodesSymbols.cvec), 0);
        rootScope.define(new symbols_1.BuiltInTypeSymbol(QcodesSymbols.qubit), 0);
        rootScope.define(new symbols_1.BuiltInTypeSymbol(QcodesSymbols.cbit), 0);
        rootScope.define(new symbols_1.BuiltInTypeSymbol(QcodesSymbols.let), 0);
        rootScope.define(new symbols_1.BuiltInTypeSymbol(QcodesSymbols.array), 0);
        return new multiScopeSymbolTable_1.MultiScopeSymbolTable(rootScope);
    }
    SymbolTableBuilder.build = build;
})(SymbolTableBuilder = exports.SymbolTableBuilder || (exports.SymbolTableBuilder = {}));
class VariableSymbol extends symbols_1.Symbol {
    constructor(name, type) {
        super(name, type);
    }
    toString() {
        return `{ name: ${this.name}, type: ${this.type} }`;
    }
}
exports.VariableSymbol = VariableSymbol;
class RegisterSymbol extends symbols_1.Symbol {
    constructor(name, type, size) {
        super(name, type);
        this.size = size;
    }
    toString() {
        return `{ name: ${this.name}, type: ${this.type}, size: ${this.size} }`;
    }
}
exports.RegisterSymbol = RegisterSymbol;
var QcodesSymbols;
(function (QcodesSymbols) {
    QcodesSymbols["qvec"] = "qvec";
    QcodesSymbols["cvec"] = "cvec";
    QcodesSymbols["qubit"] = "qubit";
    QcodesSymbols["cbit"] = "cbit";
    QcodesSymbols["double"] = "double";
    QcodesSymbols["let"] = "let";
    QcodesSymbols["var"] = "var";
    QcodesSymbols["array"] = "array";
})(QcodesSymbols = exports.QcodesSymbols || (exports.QcodesSymbols = {}));
//# sourceMappingURL=symbolTable.js.map