/**
 * This ts file provides the service of pythob script mode, include the validation, complete,
 * hover and other functions.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const languageModelCache_1 = require("../languageModelCache");
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
const compilationPython_1 = require("../embedded/compilationPython");
const parser_1 = require("../embedded/python/parser");
const suggester_1 = require("../embedded/python/suggester");
function getPyScriptMode(documentRegions) {
    let embeddedScriptDocuments = languageModelCache_1.getLanguageModelCache(10, 60, document => documentRegions.get(document).getEmbeddedDocument('pyscript'));
    let compilationTool = new compilationPython_1.CompilationTool(new parser_1.PythonParser(), new suggester_1.PythonSuggester());
    return {
        getId() {
            return 'pyscript';
        },
        doValidation(document) {
            let embedded = embeddedScriptDocuments.get(document);
            return compilationTool.validateDocument(embedded);
        },
        doComplete(document, embeddedPosition) {
            let embedded = embeddedScriptDocuments.get(document);
            let content = { textDocument: embedded, position: embeddedPosition };
            return compilationTool.availableCompletions(content) || vscode_languageserver_types_1.CompletionList.create();
        },
        doResolve(item) {
            return compilationTool.completionDetailsFor(item);
        },
        doHover(document, position) {
            return compilationTool.doHover(document, position);
        },
        onDocumentRemoved(document) {
            embeddedScriptDocuments.onDocumentRemoved(document);
        },
        dispose() {
            embeddedScriptDocuments.dispose();
        }
    };
}
exports.getPyScriptMode = getPyScriptMode;
//# sourceMappingURL=pyScriptMode.js.map