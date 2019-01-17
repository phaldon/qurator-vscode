/**
 * This handler provides the function about the string.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function startsWith(haystack, needle) {
    if (haystack.length < needle.length) {
        return false;
    }
    for (let i = 0; i < needle.length; i++) {
        if (haystack[i] !== needle[i]) {
            return false;
        }
    }
    return true;
}
exports.startsWith = startsWith;
/**
 * Determines if haystack ends with needle.
 */
function endsWith(haystack, needle) {
    let diff = haystack.length - needle.length;
    if (diff > 0) {
        return haystack.lastIndexOf(needle) === diff;
    }
    else if (diff === 0) {
        return haystack === needle;
    }
    else {
        return false;
    }
}
exports.endsWith = endsWith;
/**
 * @returns the length of the common prefix of the two strings.
 */
function commonPrefixLength(a, b) {
    let i, len = Math.min(a.length, b.length);
    for (i = 0; i < len; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return i;
        }
    }
    return len;
}
exports.commonPrefixLength = commonPrefixLength;
function repeat(value, count) {
    var s = '';
    while (count > 0) {
        if ((count & 1) === 1) {
            s += value;
        }
        value += value;
        count = count >>> 1;
    }
    return s;
}
exports.repeat = repeat;
const _a = 'a'.charCodeAt(0);
const _z = 'z'.charCodeAt(0);
const _A = 'A'.charCodeAt(0);
const _Z = 'Z'.charCodeAt(0);
const _0 = '0'.charCodeAt(0);
const _9 = '9'.charCodeAt(0);
function isLetterOrDigit(text, index) {
    let c = text.charCodeAt(index);
    return (_a <= c && c <= _z) || (_A <= c && c <= _Z) || (_0 <= c && c <= _9);
}
exports.isLetterOrDigit = isLetterOrDigit;
function getWordAtText(text, offset, wordDefinition) {
    let lineStart = offset;
    while (lineStart > 0 && !isNewlineCharacter(text.charCodeAt(lineStart - 1))) {
        lineStart--;
    }
    let offsetInLine = offset - lineStart;
    let lineText = text.substr(lineStart);
    // make a copy of the regex as to not keep the state
    let flags = wordDefinition.ignoreCase ? 'gi' : 'g';
    wordDefinition = new RegExp(wordDefinition.source, flags);
    let match = wordDefinition.exec(lineText);
    while (match && match.index + match[0].length < offsetInLine) {
        match = wordDefinition.exec(lineText);
    }
    if (match && match.index <= offsetInLine) {
        return { start: match.index + lineStart, length: match[0].length };
    }
    return { start: offset, length: 0 };
}
exports.getWordAtText = getWordAtText;
function isWhitespaceOnly(str) {
    return /^\s*$/.test(str);
}
exports.isWhitespaceOnly = isWhitespaceOnly;
function isEOL(content, offset) {
    return isNewlineCharacter(content.charCodeAt(offset));
}
exports.isEOL = isEOL;
const CR = '\r'.charCodeAt(0);
const NL = '\n'.charCodeAt(0);
function isNewlineCharacter(charCode) {
    return charCode === CR || charCode === NL;
}
exports.isNewlineCharacter = isNewlineCharacter;
//# sourceMappingURL=strings.js.map