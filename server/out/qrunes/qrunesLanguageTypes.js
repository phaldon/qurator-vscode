/**
 * This ts file define language types, include node type for parser, token type for scanner and parser,
 * scanner state for scanner, qrunes document, and interface scanner.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var TokenType;
(function (TokenType) {
    TokenType[TokenType["StartCommentTag"] = 0] = "StartCommentTag";
    TokenType[TokenType["Comment"] = 1] = "Comment";
    TokenType[TokenType["EndCommentTag"] = 2] = "EndCommentTag";
    TokenType[TokenType["StartTagOpen"] = 3] = "StartTagOpen";
    TokenType[TokenType["StartTagClose"] = 4] = "StartTagClose";
    TokenType[TokenType["StartTag"] = 5] = "StartTag";
    TokenType[TokenType["EndTag"] = 6] = "EndTag";
    TokenType[TokenType["Content"] = 7] = "Content";
    TokenType[TokenType["Whitespace"] = 8] = "Whitespace";
    TokenType[TokenType["Unknown"] = 9] = "Unknown";
    TokenType[TokenType["QCodes"] = 10] = "QCodes";
    TokenType[TokenType["Settings"] = 11] = "Settings";
    TokenType[TokenType["PyScript"] = 12] = "PyScript";
    TokenType[TokenType["CppScript"] = 13] = "CppScript";
    TokenType[TokenType["EOS"] = 14] = "EOS";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var ScannerState;
(function (ScannerState) {
    ScannerState[ScannerState["WithinContent"] = 0] = "WithinContent";
    ScannerState[ScannerState["AfterOpeningStartTag"] = 1] = "AfterOpeningStartTag";
    ScannerState[ScannerState["AfterOpeningEndTag"] = 2] = "AfterOpeningEndTag";
    ScannerState[ScannerState["WithinTag"] = 3] = "WithinTag";
    ScannerState[ScannerState["WithinComment"] = 4] = "WithinComment";
    ScannerState[ScannerState["WithinQCodesContent"] = 5] = "WithinQCodesContent";
    ScannerState[ScannerState["WithinSettingsContent"] = 6] = "WithinSettingsContent";
    ScannerState[ScannerState["WithinPyScriptContent"] = 7] = "WithinPyScriptContent";
    ScannerState[ScannerState["WithinCppScriptContent"] = 8] = "WithinCppScriptContent";
})(ScannerState = exports.ScannerState || (exports.ScannerState = {}));
//# sourceMappingURL=qrunesLanguageTypes.js.map