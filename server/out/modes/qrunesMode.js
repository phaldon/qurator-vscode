/**
 * This ts file provides the service of qrunes mode, include the validation, complete,
 * hover and other functions.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const languageModelCache_1 = require("../languageModelCache");
function getQRunesMode(qrunesLanguageService) {
    let qrunesDocuments = languageModelCache_1.getLanguageModelCache(10, 60, document => qrunesLanguageService.parseQRunesDocument(document));
    return {
        getId() {
            return 'qrunes';
        },
        doComplete(document, position) {
            let pathCompletionProposals = [];
            const qrunesDocument = qrunesDocuments.get(document);
            let completionList = qrunesLanguageService.doComplete(document, position, qrunesDocument);
            completionList.items.push(...pathCompletionProposals);
            return completionList;
        },
        doHover(document, position) {
            return qrunesLanguageService.doHover(document, position, qrunesDocuments.get(document));
        },
        findDocumentHighlight(document, position) {
            return qrunesLanguageService.findDocumentHighlights(document, position, qrunesDocuments.get(document));
        },
        onDocumentRemoved(document) {
            qrunesDocuments.onDocumentRemoved(document);
        },
        dispose() {
            qrunesDocuments.dispose();
        }
    };
}
exports.getQRunesMode = getQRunesMode;
//# sourceMappingURL=qrunesMode.js.map