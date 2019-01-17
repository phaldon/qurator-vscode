/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const symbols_1 = require("../compiler/symbols");
class MethodsDictionary {
    constructor(atomFinder, tokenStream, suggestionsDictionary) {
        this.atomFinder = atomFinder;
        this.tokenStream = tokenStream;
        this.suggestionsDictionary = suggestionsDictionary;
    }
    currentMethods() {
        let atom = this.atomFinder.firstViableAtomFor(this.tokenStream);
        if (atom && atom.type instanceof symbols_1.ClassSymbol) {
            return this.suggestionsDictionary
                .allMethods()
                .filter(suggestion => suggestion.parent === atom.type.getName())
                .filter(suggestion => suggestion.type === types_1.SuggestionSymbolType.method);
        }
        else {
            return this.suggestionsDictionary.allMethods();
        }
    }
}
exports.MethodsDictionary = MethodsDictionary;
//# sourceMappingURL=methodsDictionary.js.map