/**
 * This ts file provides the service of qcodes mode, include the validation, complete,
 * hover and other functions.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const languageModelCache_1 = require("../languageModelCache");
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
const compilation_1 = require("../embedded/compilation");
const parser_1 = require("../embedded/qcodes/parser");
const suggester_1 = require("../embedded/qcodes/suggester");
function getQcodesMode(documentRegions) {
    let embeddedQcodesDocuments = languageModelCache_1.getLanguageModelCache(10, 60, document => documentRegions.get(document).getEmbeddedDocument('qcodes'));
    let compilationTool = new compilation_1.CompilationTool(new parser_1.QcodesParser(), new suggester_1.QcodesSuggester());
    return {
        getId() {
            return 'qcodes';
        },
        doValidation(document) {
            let embedded = embeddedQcodesDocuments.get(document);
            return compilationTool.validateDocument(embedded);
        },
        doComplete(document, embeddedPosition) {
            let embedded = embeddedQcodesDocuments.get(document);
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
            embeddedQcodesDocuments.onDocumentRemoved(document);
        },
        dispose() {
            embeddedQcodesDocuments.dispose();
        }
    };
}
exports.getQcodesMode = getQcodesMode;
//# sourceMappingURL=qcodesMode.js.map