/**
 * This ts file defines interface parser, suggester, SuggestionSymbolType and etc.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var SuggestionSymbolType;
(function (SuggestionSymbolType) {
    SuggestionSymbolType["method"] = "method";
    SuggestionSymbolType["class"] = "class";
})(SuggestionSymbolType = exports.SuggestionSymbolType || (exports.SuggestionSymbolType = {}));
var ParseErrorLevel;
(function (ParseErrorLevel) {
    ParseErrorLevel[ParseErrorLevel["ERROR"] = 0] = "ERROR";
    ParseErrorLevel[ParseErrorLevel["WARNING"] = 1] = "WARNING";
})(ParseErrorLevel = exports.ParseErrorLevel || (exports.ParseErrorLevel = {}));
var specificSymbol;
(function (specificSymbol) {
    specificSymbol[specificSymbol["."] = 0] = ".";
    specificSymbol[specificSymbol["@"] = 1] = "@";
    specificSymbol[specificSymbol[":"] = 2] = ":";
    specificSymbol[specificSymbol["\n"] = 3] = "\n";
    specificSymbol[specificSymbol["\r"] = 4] = "\r";
    specificSymbol[specificSymbol[" "] = 5] = " ";
    specificSymbol[specificSymbol["\t"] = 6] = "\t";
    specificSymbol[specificSymbol["="] = 7] = "=";
    specificSymbol[specificSymbol["{"] = 8] = "{";
    specificSymbol[specificSymbol["["] = 9] = "[";
    specificSymbol[specificSymbol["("] = 10] = "(";
    specificSymbol[specificSymbol["}"] = 11] = "}";
    specificSymbol[specificSymbol["]"] = 12] = "]";
    specificSymbol[specificSymbol[")"] = 13] = ")";
    specificSymbol[specificSymbol[","] = 14] = ",";
    specificSymbol[specificSymbol[";"] = 15] = ";";
})(specificSymbol = exports.specificSymbol || (exports.specificSymbol = {}));
var arraySymbol;
(function (arraySymbol) {
    arraySymbol[arraySymbol["array"] = 0] = "array";
    arraySymbol[arraySymbol["qvec"] = 1] = "qvec";
    arraySymbol[arraySymbol["cvec"] = 2] = "cvec";
    arraySymbol[arraySymbol["let"] = 3] = "let";
    arraySymbol[arraySymbol["var"] = 4] = "var";
})(arraySymbol = exports.arraySymbol || (exports.arraySymbol = {}));
var singleSymbol;
(function (singleSymbol) {
    singleSymbol[singleSymbol["cbit"] = 0] = "cbit";
    singleSymbol[singleSymbol["qubit"] = 1] = "qubit";
    singleSymbol[singleSymbol["int"] = 2] = "int";
    singleSymbol[singleSymbol["float"] = 3] = "float";
    singleSymbol[singleSymbol["double"] = 4] = "double";
    singleSymbol[singleSymbol["let"] = 5] = "let";
    singleSymbol[singleSymbol["var"] = 6] = "var";
})(singleSymbol = exports.singleSymbol || (exports.singleSymbol = {}));
//# sourceMappingURL=types.js.map