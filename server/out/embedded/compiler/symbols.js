/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Symbol {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    getName() {
        return this.name;
    }
    isType(theType) {
        return this.type.getName() === theType;
    }
}
exports.Symbol = Symbol;
class BuiltInTypeSymbol extends Symbol {
    constructor(name) {
        super(name, null);
    }
    getName() {
        return this.name;
    }
    toString() {
        return `{ name: ${this.getName()} }`;
    }
}
exports.BuiltInTypeSymbol = BuiltInTypeSymbol;
//# sourceMappingURL=symbols.js.map