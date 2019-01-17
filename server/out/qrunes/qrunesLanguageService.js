/**
 * This ts file provides the qrunes language service, include scanner, parser, doComplete,
 * hover and other functions.
 */
'use strict';
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const qrunesScanner_1 = require("./parser/qrunesScanner");
const qrunesParser_1 = require("./parser/qrunesParser");
const qrunesCompletion_1 = require("./service/qrunesCompletion");
const qrunesHover_1 = require("./service/qrunesHover");
const qrunesHighlighting_1 = require("./service/qrunesHighlighting");
__export(require("./qrunesLanguageTypes"));
__export(require("vscode-languageserver-types"));
function getLanguageService() {
    const qrunesCompletion = new qrunesCompletion_1.QRunesCompletion();
    return {
        createScanner: qrunesScanner_1.createScanner,
        parseQRunesDocument: document => qrunesParser_1.parse(document.getText()),
        doComplete: qrunesCompletion.doComplete.bind(qrunesCompletion),
        doHover: qrunesHover_1.doHover,
        findDocumentHighlights: qrunesHighlighting_1.findDocumentHighlights
    };
}
exports.getLanguageService = getLanguageService;
//# sourceMappingURL=qrunesLanguageService.js.map