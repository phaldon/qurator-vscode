/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = require("../../compiler/symbols");
class AtomFinder {
    constructor(symbolTable) {
        this.symbolTable = symbolTable;
    }
    firstViableAtomFor(tokenStream) {
        if (!this.isFinishedAtMethodScope(tokenStream)) {
            return new NullSymbol();
        }
        let atomToken = this.getAtomToken(tokenStream);
        return this.symbolTable.lookup(atomToken.text);
    }
    isFinishedAtMethodScope(tokenStream) {
        let lastPosition = tokenStream.getTokens().length - 1;
        if (tokenStream.getTokens()[lastPosition - 1].text === '.') {
            return true;
        }
        // tslint:disable-next-line
        if (tokenStream.getTokens()[lastPosition - 2].text === '.') {
            return true;
        }
        return false;
    }
    getAtomToken(tokenStream) {
        let position = tokenStream.getTokens().length - 1;
        while (tokenStream.getTokens()[position].text !== '.') {
            position--;
        }
        return tokenStream.getTokens()[position - 1];
    }
}
exports.AtomFinder = AtomFinder;
class NullSymbol extends symbols_1.Symbol {
    constructor() {
        super('null', new NullType());
    }
}
class NullType {
    getName() {
        return 'null';
    }
}
//# sourceMappingURL=atomFinder.js.map