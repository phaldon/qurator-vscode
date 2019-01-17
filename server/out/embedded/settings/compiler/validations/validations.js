/**
 * This ts file provides the validations for setting
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const errorMessages_1 = require("../tools/errorMessages");
const errorBuilder_1 = require("../../../tools/errorBuilder");
class SemanticRulesValidator {
    constructor(symbolTable, errorListener) {
        this.symbolTable = symbolTable;
        this.errorListener = errorListener;
    }
    validate(rules) {
        if (rules === undefined || rules === null) {
            return;
        }
        rules.forEach(rule => rule.applyWith(this.symbolTable, this.errorListener));
    }
}
exports.SemanticRulesValidator = SemanticRulesValidator;
class PreviousDefinitionValidation {
    constructor(symbolTable, errorListener) {
        this.symbolTable = symbolTable;
        this.errorListener = errorListener;
    }
    apply(variableName, setName, position) {
        if (this.symbolTable.lookup(variableName) === null) {
            return;
        }
        let message = errorMessages_1.ErrorMessages.previousDefinitionOf(setName);
        let error = errorBuilder_1.ErrorBuilder.error(message, position);
        this.errorListener.addError(error);
    }
    applyNotSupported(setName, position) {
        let message = errorMessages_1.ErrorMessages.defineNotSupported(setName);
        let error = errorBuilder_1.ErrorBuilder.error(message, position);
        this.errorListener.addError(error);
    }
}
exports.PreviousDefinitionValidation = PreviousDefinitionValidation;
//# sourceMappingURL=validations.js.map