/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const qrunesScanner_1 = require("../parser/qrunesScanner");
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
const qrunesLanguageTypes_1 = require("../qrunesLanguageTypes");
function findDocumentHighlights(document, position, qrunesDocument) {
    let offset = document.offsetAt(position);
    let node = qrunesDocument.findNodeAt(offset);
    if (!node.tag) {
        return [];
    }
    let result = [];
    let startTagRange = getTagNameRange(qrunesLanguageTypes_1.TokenType.StartTag, document, node.start);
    if (startTagRange && covers(startTagRange, position)) {
        if (startTagRange) {
            result.push({ kind: vscode_languageserver_types_1.DocumentHighlightKind.Read, range: startTagRange });
        }
    }
    return result;
}
exports.findDocumentHighlights = findDocumentHighlights;
function isBeforeOrEqual(pos1, pos2) {
    return pos1.line < pos2.line || (pos1.line === pos2.line && pos1.character <= pos2.character);
}
function covers(range, position) {
    return isBeforeOrEqual(range.start, position) && isBeforeOrEqual(position, range.end);
}
function getTagNameRange(tokenType, document, startOffset) {
    let scanner = qrunesScanner_1.createScanner(document.getText(), startOffset);
    let token = scanner.scan();
    while (token !== qrunesLanguageTypes_1.TokenType.EOS && token !== tokenType) {
        token = scanner.scan();
    }
    if (token !== qrunesLanguageTypes_1.TokenType.EOS) {
        return { start: document.positionAt(scanner.getTokenOffset()), end: document.positionAt(scanner.getTokenEnd()) };
    }
    return null;
}
//# sourceMappingURL=qrunesHighlighting.js.map