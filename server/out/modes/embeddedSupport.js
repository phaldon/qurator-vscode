/**
 * This ts file provides the support of other modes, include get language region function.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const qrunesLanguageService_1 = require("../qrunes/qrunesLanguageService");
// Get document regions
function getDocumentRegions(languageService, document) {
    let regions = [];
    let scanner = languageService.createScanner(document.getText());
    let token = scanner.scan();
    while (token !== qrunesLanguageService_1.TokenType.EOS) {
        switch (token) {
            case qrunesLanguageService_1.TokenType.Settings:
                regions.push({ languageId: 'settings', start: scanner.getTokenOffset(), end: scanner.getTokenEnd() });
                break;
            case qrunesLanguageService_1.TokenType.QCodes:
                regions.push({ languageId: 'qcodes', start: scanner.getTokenOffset(), end: scanner.getTokenEnd() });
                break;
            case qrunesLanguageService_1.TokenType.PyScript:
                regions.push({ languageId: 'pyscript', start: scanner.getTokenOffset(), end: scanner.getTokenEnd() });
                break;
            case qrunesLanguageService_1.TokenType.CppScript:
                regions.push({ languageId: 'cppscript', start: scanner.getTokenOffset(), end: scanner.getTokenEnd() });
                break;
        }
        token = scanner.scan();
    }
    return {
        getLanguageRanges: (range) => getLanguageRanges(document, regions, range),
        getEmbeddedDocument: (languageId) => getEmbeddedDocument(document, regions, languageId),
        getLanguageAtPosition: (position) => getLanguageAtPosition(document, regions, position),
        getLanguagesInDocument: () => getLanguagesInDocument(document, regions)
    };
}
exports.getDocumentRegions = getDocumentRegions;
function getLanguageRanges(document, regions, range) {
    let result = [];
    let currentPos = range ? range.start : qrunesLanguageService_1.Position.create(0, 0);
    let currentOffset = range ? document.offsetAt(range.start) : 0;
    let endOffset = range ? document.offsetAt(range.end) : document.getText().length;
    for (let region of regions) {
        if (region.end > currentOffset && region.start < endOffset) {
            let start = Math.max(region.start, currentOffset);
            let startPos = document.positionAt(start);
            if (currentOffset < region.start) {
                result.push({
                    start: currentPos,
                    end: startPos,
                    languageId: 'qrunes'
                });
            }
            let end = Math.min(region.end, endOffset);
            let endPos = document.positionAt(end);
            if (end > region.start) {
                result.push({
                    start: startPos,
                    end: endPos,
                    languageId: region.languageId
                });
            }
            currentOffset = end;
            currentPos = endPos;
        }
    }
    if (currentOffset < endOffset) {
        let endPos = range ? range.end : document.positionAt(endOffset);
        result.push({
            start: currentPos,
            end: endPos,
            languageId: 'qrunes'
        });
    }
    return result;
}
function getLanguagesInDocument(document, regions) {
    let result = [];
    for (let region of regions) {
        if (region.languageId && result.indexOf(region.languageId) === -1) {
            result.push(region.languageId);
            if (result.length === 3) {
                return result;
            }
        }
    }
    result.push('qrunes');
    return result;
}
function getLanguageAtPosition(document, regions, position) {
    let offset = document.offsetAt(position);
    for (let region of regions) {
        if (region.start <= offset) {
            if (offset <= region.end) {
                return region.languageId;
            }
        }
        else {
            break;
        }
    }
    return 'qrunes';
}
function getEmbeddedDocument(document, contents, languageId) {
    let currentPos = 0;
    let oldContent = document.getText();
    let result = '';
    for (let c of contents) {
        if (c.languageId === languageId) {
            result = substituteWithWhitespace(result, currentPos, c.start, oldContent);
            result += oldContent.substring(c.start, c.end);
            currentPos = c.end;
        }
    }
    result = substituteWithWhitespace(result, currentPos, oldContent.length, oldContent);
    return qrunesLanguageService_1.TextDocument.create(document.uri, languageId, document.version, result);
}
function substituteWithWhitespace(result, start, end, oldContent) {
    let accumulatedWS = 0;
    for (let i = start; i < end; i++) {
        let ch = oldContent[i];
        if (ch === '\n' || ch === '\r') {
            // only write new lines, skip the whitespace
            accumulatedWS = 0;
            result += ch;
        }
        else {
            accumulatedWS++;
        }
    }
    result = append(result, ' ', accumulatedWS);
    return result;
}
function append(result, str, n) {
    while (n > 0) {
        if (n & 1) {
            result += str;
        }
        n >>= 1;
        str += str;
    }
    return result;
}
//# sourceMappingURL=embeddedSupport.js.map