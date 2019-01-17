/**
 * This ts file provides the auto hover function of qrunes langauge.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const qrunesScanner_1 = require("../parser/qrunesScanner");
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
const tagProviders_1 = require("./tagProviders");
const qrunesLanguageTypes_1 = require("../qrunesLanguageTypes");
function doHover(document, position, qrunesDocument) {
    let offset = document.offsetAt(position);
    let node = qrunesDocument.findNodeAt(offset);
    if (!node || !node.tag) {
        return null;
    }
    let tagProviders = tagProviders_1.allTagProviders.filter(p => p.isApplicable(document.languageId));
    function getTagHover(tag, range, open) {
        tag = tag.toLowerCase();
        for (let provider of tagProviders) {
            let hover = null;
            provider.collectTags((t, label) => {
                if (t === tag) {
                    let tagLabel = open ? '@' + tag + ':' : null;
                    hover = { contents: [{ language: 'qrunes', value: tagLabel }, vscode_languageserver_types_1.MarkedString.fromPlainText(label)], range };
                }
            });
            if (hover) {
                return hover;
            }
        }
        return null;
    }
    function getTagNameRange(tokenType, startOffset) {
        let scanner = qrunesScanner_1.createScanner(document.getText(), startOffset);
        let token = scanner.scan();
        while (token !== qrunesLanguageTypes_1.TokenType.EOS && (scanner.getTokenEnd() < offset || scanner.getTokenEnd() === offset && token !== tokenType)) {
            token = scanner.scan();
        }
        if (token === tokenType && offset <= scanner.getTokenEnd()) {
            return { start: document.positionAt(scanner.getTokenOffset()), end: document.positionAt(scanner.getTokenEnd()) };
        }
        return null;
    }
    let tagRange = getTagNameRange(qrunesLanguageTypes_1.TokenType.StartTag, node.start);
    if (tagRange) {
        return getTagHover(node.tag, tagRange, true);
    }
    return null;
}
exports.doHover = doHover;
//# sourceMappingURL=qrunesHover.js.map