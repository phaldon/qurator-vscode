/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("vscode-languageserver/lib/main");
var SuggestionSymbolAdapter;
(function (SuggestionSymbolAdapter) {
    function toCompletionItem() {
        return (symbol, index) => {
            return {
                label: symbol.label,
                kind: main_1.CompletionItemKind.Text,
                data: symbol.data,
                detail: symbol.detail,
                documentation: symbol.documentation
            };
        };
    }
    SuggestionSymbolAdapter.toCompletionItem = toCompletionItem;
})(SuggestionSymbolAdapter = exports.SuggestionSymbolAdapter || (exports.SuggestionSymbolAdapter = {}));
//# sourceMappingURL=suggestionSymbolAdapter.js.map