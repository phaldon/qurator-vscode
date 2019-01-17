/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const scope_1 = require("../../compiler/scope");
const symbols_1 = require("./symbols");
const pyQpandaSDK_1 = require("../libs/pyQpandaSDK");
const symbols_2 = require("../../compiler/symbols");
const multiScopeSymbolTable_1 = require("../../compiler/multiScopeSymbolTable");
var PyQpandaSymbolTableBuilder;
(function (PyQpandaSymbolTableBuilder) {
    function create() {
        let scope = new scope_1.Scope(null, 'global');
        scope.define(new symbols_2.BuiltInTypeSymbol(symbols_1.PyQpandaSymbols.void), 0);
        scope.define(new symbols_2.BuiltInTypeSymbol(symbols_1.PyQpandaSymbols.object), 0);
        scope.define(new symbols_2.BuiltInTypeSymbol(symbols_1.PyQpandaSymbols.string), 0);
        scope.define(new symbols_2.BuiltInTypeSymbol(symbols_1.PyQpandaSymbols.number), 0);
        scope.define(new symbols_2.BuiltInTypeSymbol(symbols_1.PyQpandaSymbols.boolean), 0);
        scope.define(new symbols_2.BuiltInTypeSymbol(symbols_1.PyQpandaSymbols.dictionary), 0);
        scope.define(new symbols_2.BuiltInTypeSymbol(symbols_1.PyQpandaSymbols.class), 0);
        loadPyQpandaSymbolsAt(scope);
        return new multiScopeSymbolTable_1.MultiScopeSymbolTable(scope);
    }
    PyQpandaSymbolTableBuilder.create = create;
    function loadPyQpandaSymbolsAt(scope) {
        pyQpandaSDK_1.PyQpandaSDK.classes().forEach(qclass => {
            let type = scope.lookup(symbols_1.PyQpandaSymbols.class);
            let args = getArgumentsSymbols(qclass.arguments, scope);
            let methods = getMethodsSymbols(qclass.methods, scope);
            let classSymbol = new symbols_1.ClassSymbol(qclass.name, type, args, methods);
            scope.define(classSymbol, 0);
        });
    }
    function getMethodsSymbols(qmethods, scope) {
        return qmethods.map(qmethod => {
            let type = scope.lookup(qmethod.type) || scope.lookup(symbols_1.PyQpandaSymbols.void);
            let requiredArguments = getArgumentsSymbols(qmethod.arguments, scope);
            return new symbols_1.MethodSymbol(qmethod.name, type, requiredArguments);
        });
    }
    function getArgumentsSymbols(qarguments, scope) {
        if (qarguments === undefined) {
            return [];
        }
        return qarguments.map(qargument => {
            let type = scope.lookup(qargument.type) || scope.lookup(symbols_1.PyQpandaSymbols.void);
            return new symbols_1.ArgumentSymbol(qargument.name, type, qargument.optional);
        });
    }
})(PyQpandaSymbolTableBuilder = exports.PyQpandaSymbolTableBuilder || (exports.PyQpandaSymbolTableBuilder = {}));
//# sourceMappingURL=qpandaSymbolTableBuilder.js.map