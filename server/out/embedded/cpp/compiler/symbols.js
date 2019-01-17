/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../../compiler/symbols");
class ClassSymbol extends symbols_1.Symbol {
    constructor(name, type, requiredArguments, methods) {
        super(name, type);
        this.requiredArguments = requiredArguments;
        this.methods = methods;
    }
    toString() {
        return `{ name: ${this.name}, type: ${this.type.getName()} }`;
    }
}
exports.ClassSymbol = ClassSymbol;
class MethodSymbol extends symbols_1.Symbol {
    constructor(name, type, requiredArguments = []) {
        super(name, type);
        this.arguments = [];
        this.arguments = requiredArguments;
    }
    getArguments() {
        return this.arguments;
    }
    toString() {
        return `{ name: ${this.name}, type: ${this.type.getName()}, arguments: ${this.arguments} }`;
    }
}
exports.MethodSymbol = MethodSymbol;
class ArgumentSymbol extends symbols_1.Symbol {
    constructor(name, type, optional = false) {
        super(name, type);
        this.optional = optional;
    }
    toString() {
        if (this.type === null) {
            return `{ name: ${this.name}, type: NULL }`;
        }
        return `{ name: ${this.name}, type: ${this.type.getName()} }`;
    }
}
exports.ArgumentSymbol = ArgumentSymbol;
class VariableSymbol extends symbols_1.Symbol {
    constructor(name, type, metadata) {
        super(name, type);
        this.metadata = null;
        if (metadata && metadata !== null) {
            this.metadata = metadata;
        }
    }
    hasSize() {
        return this.metadata !== null && this.metadata.size !== null;
    }
    size() {
        return this.metadata.size;
    }
    toString() {
        if (this.type === null) {
            return `{ name: ${this.name}, type: NULL }`;
        }
        return `{ name: ${this.name}, type: ${this.type.getName()} }`;
    }
}
exports.VariableSymbol = VariableSymbol;
var PyQpandaSymbols;
(function (PyQpandaSymbols) {
    PyQpandaSymbols["void"] = "void";
    PyQpandaSymbols["object"] = "object";
    PyQpandaSymbols["string"] = "string";
    PyQpandaSymbols["number"] = "number";
    PyQpandaSymbols["boolean"] = "boolean";
    PyQpandaSymbols["dictionary"] = "dict";
    PyQpandaSymbols["class"] = "class";
})(PyQpandaSymbols = exports.PyQpandaSymbols || (exports.PyQpandaSymbols = {}));
//# sourceMappingURL=symbols.js.map