/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class VariablesDictionary {
    constructor(symbolTable) {
        this.symbolTable = symbolTable;
    }
    currentVariables() {
        let asSuggestionSymbol = (input) => {
            return {
                label: input.getName(),
                detail: 'Declared variable',
                documentation: 'This is a previously declared variable',
                type: 'Variable',
                parent: input.getName(),
                data: input.data
            };
        };
        return this.symbolTable
            .currentSymbols()
            .filter(symbol => 'class' !== symbol.type.getName())
            .map(asSuggestionSymbol);
    }
}
exports.VariablesDictionary = VariablesDictionary;
//# sourceMappingURL=variablesDictionary.js.map