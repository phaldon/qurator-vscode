/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class SuggestionsDictionary {
    allSymbols() {
        return this.getSymbols();
    }
    symbolsWithTypeIn(types) {
        let isContainedInTypes = (symbol) => types.indexOf(symbol.type) > -1;
        return this.getSymbols().filter(isContainedInTypes);
    }
    methodsIn(names) {
        return this.symbolsWithTypeIn(['method']).filter(symbol => names.includes(symbol.label));
    }
    allMethods() {
        return this.symbolsWithTypeIn(['method']);
    }
    getSymbols() {
        const pyqpandaSymbols = require('../../../../pyQpandaSDK.json');
        let symbols = [];
        pyqpandaSymbols.classes.forEach(qclass => {
            symbols.push({
                label: qclass.name,
                detail: qclass.detail,
                documentation: qclass.documentation,
                type: 'class',
                parent: qclass.name,
                data: qclass.data
            });
            symbols.push(...this.getMethods(qclass));
        });
        return symbols;
    }
    getMethods(qclass) {
        return qclass.methods.map(qmethod => {
            return {
                label: qmethod.name,
                detail: qmethod.detail,
                documentation: qmethod.documentation,
                type: 'method',
                parent: qclass.name,
                data: qclass.data
            };
        });
    }
}
exports.SuggestionsDictionary = SuggestionsDictionary;
//# sourceMappingURL=suggestionsDictionary.js.map