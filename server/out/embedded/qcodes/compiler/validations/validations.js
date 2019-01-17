/**
 * This ts file provides the validate functions of qcodes modes.
 */
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorMessages_1 = require("../tools/errorMessages");
const Decorators_1 = require("antlr4ts/Decorators");
const symbolTable_1 = require("../symbolTable");
const errorBuilder_1 = require("../../../tools/errorBuilder");
const types_1 = require("../../../types");
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
class ExistingSymbolValidationRule {
    constructor(scope, variableName, position) {
        this.scope = scope;
        this.variableName = variableName;
        this.position = position;
    }
    applyWith(symbolTable, errorListener) {
        if (symbolTable.lookupToRoot(this.scope, this.variableName) !== null) {
            return;
        }
        if (symbolTable.lookup(this.variableName) !== null) {
            return;
        }
        let message = errorMessages_1.ErrorMessages.symbolNotPreviouslyDefined(this.variableName);
        let error = errorBuilder_1.ErrorBuilder.error(message, this.position);
        errorListener.addError(error);
    }
}
__decorate([
    Decorators_1.Override
], ExistingSymbolValidationRule.prototype, "applyWith", null);
exports.ExistingSymbolValidationRule = ExistingSymbolValidationRule;
class ExistingDefinationValidationRule {
    constructor(variableName, position, names, types) {
        this.variableName = variableName;
        this.position = position;
        this.names = names;
        this.types = types;
    }
    applyWith(symbolTable, errorListener) {
        let flagName = 0;
        if (symbolTable.currentScopes.length > 0) {
            for (let sym of symbolTable.currentScopes) {
                if (sym.name.length > 7) {
                    let name = sym.name.substring(0, sym.name.length - 7);
                    let typeName = sym.name.substring(sym.name.length - 6);
                    if (typeName === 'method' && name === this.variableName) {
                        if (sym.args !== null && sym.args.length > 0 && this.names !== null && this.names.length > 0) {
                            if (sym.args.length === this.names.length) {
                                for (let i = 0; i < this.names.length; i++) {
                                    if (this.types[i] === sym.types[i]) {
                                        flagName = 3;
                                    }
                                    else {
                                        flagName = 2;
                                        break;
                                    }
                                }
                            }
                            else {
                                flagName = 1;
                                break;
                            }
                        }
                        else {
                            if (sym.args === null && this.names === null) {
                                flagName = 3;
                            }
                            else {
                                flagName = 1;
                            }
                            break;
                        }
                    }
                }
            }
        }
        let message = null;
        if (flagName === 0) {
            message = errorMessages_1.ErrorMessages.functionNotFound(this.variableName);
            let error = errorBuilder_1.ErrorBuilder.warning(message, this.position);
            errorListener.addError(error);
        }
        else if (flagName === 1) {
            message = errorMessages_1.ErrorMessages.functionArgsDefinitionOf(this.variableName);
            let error = errorBuilder_1.ErrorBuilder.error(message, this.position);
            errorListener.addError(error);
        }
        else if (flagName === 2) {
            message = errorMessages_1.ErrorMessages.functionTypeDefinitionOf(this.variableName);
            let error = errorBuilder_1.ErrorBuilder.error(message, this.position);
            errorListener.addError(error);
        }
        else if (flagName === 0) {
            return;
        }
    }
}
__decorate([
    Decorators_1.Override
], ExistingDefinationValidationRule.prototype, "applyWith", null);
exports.ExistingDefinationValidationRule = ExistingDefinationValidationRule;
class PreviousDefinitionValidation {
    constructor(symbolTable, errorListener) {
        this.symbolTable = symbolTable;
        this.errorListener = errorListener;
    }
    apply(variableName, position) {
        if (this.symbolTable.lookup(variableName) === null) {
            return;
        }
        let message = errorMessages_1.ErrorMessages.symbolPreviousDefinitionOf(variableName);
        let error = errorBuilder_1.ErrorBuilder.warning(message, position);
        this.errorListener.addError(error);
    }
    applyScope(scope, variableName, position) {
        if (scope === null || scope === this.symbolTable.currentScope) {
            if (this.symbolTable.lookup(variableName) === null) {
                return;
            }
        }
        else {
            if (scope.lookup(variableName) === null) {
                return;
            }
        }
        let message = errorMessages_1.ErrorMessages.symbolPreviousDefinitionOf(variableName);
        let error = errorBuilder_1.ErrorBuilder.error(message, position);
        this.errorListener.addError(error);
    }
    applyQuantum(scope, variableName, position, type) {
        let symbol = this.symbolTable.lookupToRoot(scope, variableName);
        let result1 = this.mustIgnore(symbol, type);
        if (result1.flag1) {
            return;
        }
        let symbol2 = this.symbolTable.lookup(variableName);
        let result2 = this.mustIgnore(symbol2, type);
        if (result2.flag1) {
            return;
        }
        let message = null;
        if (result1.flag2 || result2.flag2) {
            message = errorMessages_1.ErrorMessages.symbolNotPreviousTypeDefinitionOf(variableName, type);
        }
        else {
            message = errorMessages_1.ErrorMessages.symbolNotPreviouslyDefined(variableName);
        }
        let error = errorBuilder_1.ErrorBuilder.error(message, position);
        this.errorListener.addError(error);
    }
    applyCvec(scope, variableName, position, type) {
        let symbol = this.symbolTable.lookupToRoot(scope, variableName);
        let result1 = this.mustIgnore(symbol, type);
        if (result1.flag1) {
            return;
        }
        let symbol2 = this.symbolTable.lookup(variableName);
        let result2 = this.mustIgnore(symbol2, type);
        if (result2.flag1) {
            return;
        }
        let message = null;
        if (result1.flag2 || result2.flag2) {
            message = errorMessages_1.ErrorMessages.symbolNotPreviousTypeDefinitionOf(variableName, type);
        }
        let error = errorBuilder_1.ErrorBuilder.error(message, position);
        this.errorListener.addError(error);
    }
    mustIgnore(symbol, type) {
        if (symbol === null) {
            return {
                flag1: false,
                flag2: false
            };
        }
        if (symbol.type !== null && symbol.type.getName() === type) {
            return {
                flag1: true,
                flag2: false
            };
        }
        else {
            return {
                flag1: false,
                flag2: true
            };
        }
    }
}
exports.PreviousDefinitionValidation = PreviousDefinitionValidation;
class PreviousFunctionValidation {
    constructor(symbolTable, errorListener) {
        this.symbolTable = symbolTable;
        this.errorListener = errorListener;
    }
    apply(variableName, position) {
        let flag = false;
        if (this.symbolTable.currentScopes.length > 0) {
            for (let sym of this.symbolTable.currentScopes) {
                if (sym.name === variableName) {
                    flag = true;
                    break;
                }
            }
        }
        if (flag) {
            let message = errorMessages_1.ErrorMessages.functionPreviousDefinitionOf(variableName);
            let error = errorBuilder_1.ErrorBuilder.error(message, position);
            this.errorListener.addError(error);
        }
    }
    applyNotFunction(variableName, position) {
        let flag = false;
        let methodName = variableName + '_method';
        let defineName = variableName + '_define';
        if (this.symbolTable.currentScopes.length > 0) {
            for (let sym of this.symbolTable.currentScopes) {
                if (sym.name === methodName) {
                    flag = true;
                    break;
                }
                else if (sym.name === defineName) {
                    flag = true;
                    break;
                }
            }
        }
        if (!flag) {
            let message = errorMessages_1.ErrorMessages.functionPreviousDefinitionOf(variableName);
            let error = errorBuilder_1.ErrorBuilder.error(message, position);
            this.errorListener.addError(error);
        }
    }
}
exports.PreviousFunctionValidation = PreviousFunctionValidation;
class PreviousFunctionDefinationValidation {
    constructor(symbolTable, errorListener) {
        this.symbolTable = symbolTable;
        this.errorListener = errorListener;
    }
    apply(variableName, position) {
        let flag = false;
        if (this.symbolTable.currentScopes.length > 0) {
            for (let sym of this.symbolTable.currentScopes) {
                if (sym.name === variableName) {
                    flag = true;
                }
            }
        }
        if (flag) {
            let message = errorMessages_1.ErrorMessages.functionPreviousDefinitionOf(variableName);
            let error = errorBuilder_1.ErrorBuilder.error(message, position);
            this.errorListener.addError(error);
        }
    }
    applyArgs(scope, methodName, args, positions) {
        let flagName = 0;
        let varName = null;
        let pos = null;
        let types = [];
        for (let i = 0; i < args.length; i++) {
            let sym = null;
            let sym2 = null;
            if (scope === null || scope === this.symbolTable.currentScope) {
                sym = this.symbolTable.lookup(args[i]);
            }
            else {
                sym2 = scope.lookup(args[i]);
            }
            let type = null;
            if (sym !== null) {
                type = sym.type.getName();
                types.push(type);
            }
            else if (sym2 !== null) {
                type = sym2.type.getName();
                types.push(type);
            }
        }
        if (types.length > 0) {
            if (this.symbolTable.currentScopes.length > 0) {
                for (let sc of this.symbolTable.currentScopes) {
                    if (sc.name === methodName + '_define' || sc.name === methodName + '_method') {
                        if (sc.args !== null && sc.args.length > 0) {
                            if (sc.args.length === args.length) {
                                for (let i = 0; i < args.length; i++) {
                                    if (types[i] === sc.types[i]) {
                                    }
                                    else {
                                        flagName = 2;
                                        varName = args[i];
                                        pos = positions[i];
                                        break;
                                    }
                                }
                            }
                            else {
                                flagName = 1;
                                varName = args[0];
                                pos = positions[0];
                                break;
                            }
                        }
                        else {
                            flagName = 1;
                            varName = args[0];
                            pos = positions[0];
                            break;
                        }
                    }
                }
            }
        }
        let message = null;
        if (flagName === 0) {
            return;
        }
        else if (flagName === 1) {
            message = errorMessages_1.ErrorMessages.functionArgsDefinitionOf(varName);
        }
        else if (flagName === 2) {
            message = errorMessages_1.ErrorMessages.functionTypeDefinitionOf(varName);
        }
        let error = errorBuilder_1.ErrorBuilder.error(message, pos);
        this.errorListener.addError(error);
    }
}
exports.PreviousFunctionDefinationValidation = PreviousFunctionDefinationValidation;
class PreviousNotDefinitionValidation {
    constructor(symbolTable, errorListener) {
        this.symbolTable = symbolTable;
        this.errorListener = errorListener;
    }
    applySymbol(position, variableName) {
        let message = errorMessages_1.ErrorMessages.missingSymbol(variableName);
        let error = errorBuilder_1.ErrorBuilder.error(message, position);
        this.errorListener.addError(error);
    }
    apply(scope, variableName, position, type, sizes) {
        let symbol = this.symbolTable.lookupToRoot(scope, variableName);
        let result1 = this.mustIgnore(symbol, type, sizes);
        if (result1.flag1) {
            return;
        }
        let symbol2 = this.symbolTable.lookup(variableName);
        let result2 = this.mustIgnore(symbol2, type, sizes);
        if (result2.flag1) {
            return;
        }
        let message = null;
        if (type === symbolTable_1.QcodesSymbols.array) {
            if (result1.flag2 || result2.flag2) {
                message = errorMessages_1.ErrorMessages.ArrayindexOutOfBound(variableName);
            }
            else {
                message = errorMessages_1.ErrorMessages.ArrayNotPreviouslyDefined(variableName);
            }
        }
        else {
            message = errorMessages_1.ErrorMessages.symbolNotPreviouslyDefined(variableName);
        }
        let error = errorBuilder_1.ErrorBuilder.error(message, position);
        this.errorListener.addError(error);
    }
    mustIgnore(symbol, type, sizes) {
        if (symbol === null) {
            return {
                flag1: false,
                flag2: false
            };
        }
        if (symbol.type !== null) {
            if ((symbol.type.getName() in types_1.arraySymbol) && (type in types_1.arraySymbol)) {
                if (sizes.length >= 1 && sizes[0] !== -1) {
                    if (symbol.size.length === 1 && symbol.size[0] === -1) {
                        return {
                            flag1: true,
                            flag2: false
                        };
                    }
                    if (symbol.size.length !== sizes.length) {
                        return {
                            flag1: false,
                            flag2: false
                        };
                    }
                    else {
                        let sizesSym = symbol.size;
                        for (let i = 0; i < sizes.length; i++) {
                            if (sizes[i] >= sizesSym[i]) {
                                return {
                                    flag1: false,
                                    flag2: true
                                };
                            }
                        }
                    }
                }
            }
            else if ((symbol.type.getName() in types_1.singleSymbol) && (type in types_1.singleSymbol)) {
                return {
                    flag1: true,
                    flag2: false
                };
            }
            else {
                return {
                    flag1: false,
                    flag2: false
                };
            }
        }
        return {
            flag1: true,
            flag2: false
        };
    }
}
exports.PreviousNotDefinitionValidation = PreviousNotDefinitionValidation;
//# sourceMappingURL=validations.js.map