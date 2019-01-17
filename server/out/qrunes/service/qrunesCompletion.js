/**
 * This ts file provides the auto completion function of qrunes langauge.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
const qrunesScanner_1 = require("../parser/qrunesScanner");
const tagProviders_1 = require("./tagProviders");
const qrunesLanguageTypes_1 = require("../qrunesLanguageTypes");
class QRunesCompletion {
    doComplete(document, position, qrunesDocument) {
        let result = {
            isIncomplete: false,
            items: []
        };
        let tagProviders = tagProviders_1.allTagProviders.filter(p => p.isApplicable(document.languageId));
        // Get document's text and offset.
        let text = document.getText();
        let offset = document.offsetAt(position);
        let node = qrunesDocument.findNodeBefore(offset);
        if (!node) {
            return result;
        }
        let scanner = qrunesScanner_1.createScanner(text, node.start);
        function getReplaceRange(replaceStart, replaceEnd = offset) {
            if (replaceStart > offset) {
                replaceStart = offset;
            }
            return { start: document.positionAt(replaceStart), end: document.positionAt(replaceEnd) };
        }
        function collectOpenTagSuggestions(afterOpenBracket, tagNameEnd) {
            let range = getReplaceRange(afterOpenBracket, tagNameEnd);
            tagProviders.forEach((provider) => {
                provider.collectTags((tag, label) => {
                    result.items.push({
                        label: tag,
                        kind: vscode_languageserver_types_1.CompletionItemKind.Property,
                        documentation: label,
                        textEdit: vscode_languageserver_types_1.TextEdit.replace(range, tag),
                        insertTextFormat: vscode_languageserver_types_1.InsertTextFormat.PlainText
                    });
                });
            });
            return result;
        }
        function collectTagSuggestions(tagStart, tagEnd) {
            collectOpenTagSuggestions(tagStart, tagEnd);
            return result;
        }
        function scanNextForEndPos(nextToken) {
            if (offset === scanner.getTokenEnd()) {
                token = scanner.scan();
                if (token === nextToken && scanner.getTokenOffset() === offset) {
                    return scanner.getTokenEnd();
                }
            }
            return offset;
        }
        //Scanner the qrunes language and return result.
        let token = scanner.scan();
        while (token !== qrunesLanguageTypes_1.TokenType.EOS && scanner.getTokenOffset() <= offset) {
            switch (token) {
                case qrunesLanguageTypes_1.TokenType.StartTagOpen:
                    if (scanner.getTokenEnd() === offset) {
                        let endPos = scanNextForEndPos(qrunesLanguageTypes_1.TokenType.StartTag);
                        return collectTagSuggestions(offset, endPos);
                    }
                    break;
                case qrunesLanguageTypes_1.TokenType.StartTag:
                    if (scanner.getTokenOffset() <= offset && offset <= scanner.getTokenEnd()) {
                        return collectOpenTagSuggestions(scanner.getTokenOffset(), scanner.getTokenEnd());
                    }
                    break;
                case qrunesLanguageTypes_1.TokenType.Whitespace:
                    if (offset <= scanner.getTokenEnd()) {
                        switch (scanner.getScannerState()) {
                            case qrunesLanguageTypes_1.ScannerState.AfterOpeningStartTag:
                                let startPos = scanner.getTokenOffset();
                                let endTagPos = scanNextForEndPos(qrunesLanguageTypes_1.TokenType.StartTag);
                                return collectTagSuggestions(startPos, endTagPos);
                            case qrunesLanguageTypes_1.ScannerState.WithinTag:
                        }
                    }
                    break;
                case qrunesLanguageTypes_1.TokenType.EndTag:
                    if (offset <= scanner.getTokenEnd()) {
                        let start = scanner.getTokenOffset() - 1;
                        while (start >= 0) {
                            start--;
                        }
                    }
                    break;
                default:
                    if (offset <= scanner.getTokenEnd()) {
                        return result;
                    }
                    break;
            }
            token = scanner.scan();
        }
        return result;
    }
}
exports.QRunesCompletion = QRunesCompletion;
//# sourceMappingURL=qrunesCompletion.js.map