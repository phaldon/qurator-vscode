"use strict";
/**
 * This ts file provides the qrunes language scanner function, this function
 * used in providing the function for qrunes language and dividing the language region.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const nls = require("vscode-nls");
const qrunesLanguageTypes_1 = require("../qrunesLanguageTypes");
let localize = nls.loadMessageBundle();
class MultiLineStream {
    constructor(source, position) {
        this.source = source;
        this.len = source.length;
        this.position = position;
    }
    eos() {
        return this.len <= this.position;
    }
    getSource() {
        return this.source;
    }
    pos() {
        return this.position;
    }
    advance(n) {
        this.position += n;
    }
    goToEnd() {
        this.position = this.source.length;
    }
    advanceIfChar(ch) {
        if (ch === this.source.charCodeAt(this.position)) {
            this.position++;
            return true;
        }
        return false;
    }
    advanceIfChars(ch) {
        let i;
        if (this.position + ch.length > this.source.length) {
            return false;
        }
        for (i = 0; i < ch.length; i++) {
            if (this.source.charCodeAt(this.position + i) !== ch[i]) {
                return false;
            }
        }
        this.advance(i);
        return true;
    }
    advanceIfRegExp(regex) {
        let str = this.source.substr(this.position);
        let match = str.match(regex);
        if (match) {
            this.position = this.position + match.index + match[0].length;
            return match[0];
        }
        return '';
    }
    ifRegExp(regex) {
        let str = this.source;
        let match = str.match(regex);
        if (match) {
            return match[0];
        }
        return '';
    }
    advanceUntilRegExp(regex) {
        let str = this.source.substr(this.position);
        let match = str.match(regex);
        if (match) {
            this.position = this.position + match.index;
            return match[0];
        }
        else {
            this.goToEnd();
        }
        return '';
    }
    advanceUntilChar(ch) {
        while (this.position < this.source.length) {
            if (this.source.charCodeAt(this.position) === ch) {
                return true;
            }
            this.advance(1);
        }
        return false;
    }
    skipWhitespace() {
        let n = this.advanceWhileChar(ch => {
            return ch === _WSP || ch === _TAB || ch === _NWL || ch === _LFD || ch === _CAR;
        });
        return n > 0;
    }
    advanceWhileChar(condition) {
        let posNow = this.position;
        while (this.position < this.len && condition(this.source.charCodeAt(this.position))) {
            this.position++;
        }
        return this.position - posNow;
    }
}
const _FDS = '/'.charCodeAt(0);
const _ATD = '@'.charCodeAt(0);
const _COL = ':'.charCodeAt(0);
const _NWL = '\n'.charCodeAt(0);
const _CAR = '\r'.charCodeAt(0);
const _LFD = '\f'.charCodeAt(0);
const _WSP = ' '.charCodeAt(0);
const _TAB = '\t'.charCodeAt(0);
const _STR = '*'.charCodeAt(0);
function createScanner(input, initialOffset = 0, initialState = qrunesLanguageTypes_1.ScannerState.WithinContent) {
    let stream = new MultiLineStream(input, initialOffset);
    let state = initialState;
    let tokenOffset = 0;
    let tokenType = qrunesLanguageTypes_1.TokenType.Unknown;
    let tokenError;
    let lastTag;
    let langName;
    function nextElementName() {
        return stream.advanceIfRegExp(/^[_\w][_\w-.\d]*/).toLowerCase();
    }
    function languageName() {
        if (stream.ifRegExp(/.*language\s*=\s*Python.*/) != '') {
            return 0;
        }
        else if (stream.ifRegExp(/.*language\s*=\s*C\+\+.*/) != '') {
            return 1;
        }
        return 2;
    }
    function finishToken(offset, type, errorMessage) {
        tokenType = type;
        tokenOffset = offset;
        tokenError = errorMessage;
        return type;
    }
    function scan() {
        let offset = stream.pos();
        let oldState = state;
        let token = internalScan();
        if (token !== qrunesLanguageTypes_1.TokenType.EOS && offset === stream.pos()) {
            console.log('Scanner.scan has not advanced at offset ' + offset + ', state before: ' + oldState + ' after: ' + state);
            stream.advance(1);
            return finishToken(offset, qrunesLanguageTypes_1.TokenType.Unknown);
        }
        return token;
    }
    function internalScan() {
        let offset = stream.pos();
        if (stream.eos()) {
            return finishToken(offset, qrunesLanguageTypes_1.TokenType.EOS);
        }
        let errorMessage;
        switch (state) {
            case qrunesLanguageTypes_1.ScannerState.WithinComment:
                if (stream.advanceIfChar(_NWL)) { // Scanner the end tag of comment \n.
                    state = qrunesLanguageTypes_1.ScannerState.WithinContent;
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.EndCommentTag);
                }
                if (stream.advanceIfChars([_STR, _FDS])) { // Scanner the end tag of comment */.
                    state = qrunesLanguageTypes_1.ScannerState.WithinContent;
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.EndCommentTag);
                }
                stream.advanceUntilChar(_NWL); // \n.
                return finishToken(offset, qrunesLanguageTypes_1.TokenType.Comment);
            case qrunesLanguageTypes_1.ScannerState.WithinContent:
                langName = languageName();
                if (stream.advanceIfChar(_ATD)) { // Scanner the begin tag of qrunes tags @.			
                    state = qrunesLanguageTypes_1.ScannerState.AfterOpeningStartTag;
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.StartTagOpen);
                }
                if (stream.advanceIfChars([_FDS, _FDS])) { // Scanner the begin tag for comment //.
                    state = qrunesLanguageTypes_1.ScannerState.WithinComment;
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.StartCommentTag);
                }
                if (stream.advanceIfChars([_FDS, _STR])) { // Scanner the begin tag for comment /*.
                    state = qrunesLanguageTypes_1.ScannerState.WithinComment;
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.StartCommentTag);
                }
                stream.advanceUntilChar(_ATD);
                return finishToken(offset, qrunesLanguageTypes_1.TokenType.Content);
            case qrunesLanguageTypes_1.ScannerState.AfterOpeningStartTag:
                lastTag = nextElementName(); // Get the qrunes tag name.
                if (lastTag.length > 0) {
                    state = qrunesLanguageTypes_1.ScannerState.WithinTag;
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.StartTag);
                }
                if (stream.skipWhitespace()) { // White space is not valid here.
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.Whitespace, localize('error.unexpectedWhitespace', 'Tag name must directly follow colon.'));
                }
                state = qrunesLanguageTypes_1.ScannerState.WithinTag;
                stream.advanceUntilChar(_COL); // The end tag of qrunes tag :.
                if (offset < stream.pos()) {
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.Unknown, localize('error.startTagNameExpected', 'Start tag name expected.'));
                }
                return internalScan();
            case qrunesLanguageTypes_1.ScannerState.WithinTag:
                if (stream.skipWhitespace()) {
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.Whitespace);
                }
                if (stream.advanceIfChar(_COL)) { // The end tag of qrunes tag :.
                    if (lastTag === 'qcodes') {
                        state = qrunesLanguageTypes_1.ScannerState.WithinQCodesContent;
                    }
                    else if (lastTag === 'settings') {
                        state = qrunesLanguageTypes_1.ScannerState.WithinSettingsContent;
                    }
                    else if (lastTag === 'script') { // Get the language name and choose the script region.
                        if (langName === 1) {
                            state = qrunesLanguageTypes_1.ScannerState.WithinCppScriptContent;
                        }
                        else {
                            state = qrunesLanguageTypes_1.ScannerState.WithinPyScriptContent;
                        }
                    }
                    else {
                        state = qrunesLanguageTypes_1.ScannerState.WithinContent;
                    }
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.StartTagClose);
                }
                stream.advance(1);
                return finishToken(offset, qrunesLanguageTypes_1.TokenType.Unknown, localize('error.unexpectedCharacterInTag', 'Unexpected character in tag.'));
            case qrunesLanguageTypes_1.ScannerState.WithinQCodesContent:
                stream.advanceUntilRegExp(/\@/i);
                state = qrunesLanguageTypes_1.ScannerState.WithinContent;
                if (offset < stream.pos()) {
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.QCodes);
                }
                return internalScan(); // No advance yet - jump to content.
            case qrunesLanguageTypes_1.ScannerState.WithinSettingsContent:
                stream.advanceUntilRegExp(/\@/i);
                state = qrunesLanguageTypes_1.ScannerState.WithinContent;
                if (offset < stream.pos()) {
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.Settings);
                }
                return internalScan(); // No advance yet - jump to content.
            case qrunesLanguageTypes_1.ScannerState.WithinPyScriptContent:
                stream.advanceUntilRegExp(/\@/i);
                state = qrunesLanguageTypes_1.ScannerState.WithinContent;
                if (offset < stream.pos()) {
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.PyScript);
                }
                return internalScan(); // No advance yet - jump to content.
            case qrunesLanguageTypes_1.ScannerState.WithinCppScriptContent:
                stream.advanceUntilRegExp(/\@/i);
                state = qrunesLanguageTypes_1.ScannerState.WithinContent;
                if (offset < stream.pos()) {
                    return finishToken(offset, qrunesLanguageTypes_1.TokenType.CppScript);
                }
                return internalScan(); // No advance yet - jump to content.
        }
        stream.advance(1);
        state = qrunesLanguageTypes_1.ScannerState.WithinContent;
        return finishToken(offset, qrunesLanguageTypes_1.TokenType.Unknown, errorMessage);
    }
    return {
        scan,
        getTokenType: () => tokenType,
        getTokenOffset: () => tokenOffset,
        getTokenLength: () => stream.pos() - tokenOffset,
        getTokenEnd: () => stream.pos(),
        getTokenText: () => stream.getSource().substring(tokenOffset, stream.pos()),
        getScannerState: () => state,
        getTokenError: () => tokenError
    };
}
exports.createScanner = createScanner;
//# sourceMappingURL=qrunesScanner.js.map