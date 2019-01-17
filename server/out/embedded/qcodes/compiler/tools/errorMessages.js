/**
 * This ts file defines the error messages of qcodes validation.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorMessages;
(function (ErrorMessages) {
    function symbolNotPreviouslyDefined(name) {
        return `Symbol ${name} is not previously defined.`;
    }
    ErrorMessages.symbolNotPreviouslyDefined = symbolNotPreviouslyDefined;
    function symbolPreviousDefinitionOf(name) {
        return `Symbol ${name} is previously defined.`;
    }
    ErrorMessages.symbolPreviousDefinitionOf = symbolPreviousDefinitionOf;
    function symbolNotPreviousTypeDefinitionOf(name, type) {
        return `The type of Symbol ${name} is not ${type}.`;
    }
    ErrorMessages.symbolNotPreviousTypeDefinitionOf = symbolNotPreviousTypeDefinitionOf;
    function ArrayNotPreviouslyDefined(name) {
        return `Array ${name} is not previously defined.`;
    }
    ErrorMessages.ArrayNotPreviouslyDefined = ArrayNotPreviouslyDefined;
    function ArrayindexOutOfBound(name) {
        return `Array ${name} is out of bounds.`;
    }
    ErrorMessages.ArrayindexOutOfBound = ArrayindexOutOfBound;
    function functionNotFound(name) {
        return `Function ${name} is not found.`;
    }
    ErrorMessages.functionNotFound = functionNotFound;
    function functionNotDefined(name) {
        return `Function ${name} is not defined.`;
    }
    ErrorMessages.functionNotDefined = functionNotDefined;
    function functionPreviousDefinitionOf(name) {
        return `Function ${name} is previously defined.`;
    }
    ErrorMessages.functionPreviousDefinitionOf = functionPreviousDefinitionOf;
    function functionArgsDefinitionOf(name) {
        return `The number of arguments is not matched `;
    }
    ErrorMessages.functionArgsDefinitionOf = functionArgsDefinitionOf;
    function functionTypeDefinitionOf(name) {
        return `The type of arguments is not matched `;
    }
    ErrorMessages.functionTypeDefinitionOf = functionTypeDefinitionOf;
    function definationPreviousDefinitionOf(name) {
        return `Function defination ${name} is previously defined.`;
    }
    ErrorMessages.definationPreviousDefinitionOf = definationPreviousDefinitionOf;
    function missingSymbol(name) {
        return `The ${name} is missing.`;
    }
    ErrorMessages.missingSymbol = missingSymbol;
})(ErrorMessages = exports.ErrorMessages || (exports.ErrorMessages = {}));
//# sourceMappingURL=errorMessages.js.map