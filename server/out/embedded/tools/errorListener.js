/**
 *
 */
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Decorators_1 = require("antlr4ts/Decorators");
const types_1 = require("../types");
class ErrorListener {
    constructor() {
        this.errors = [];
    }
    addError(error) {
        this.errors.push(error);
    }
    syntaxError(_recognizer, offendingSymbol, line, charPositionInLine, msg, _e) {
        // _e contains the first token of the rule that failed
        if (offendingSymbol.text === ')') {
            this.errors.push({
                line: line - 1,
                start: charPositionInLine,
                end: charPositionInLine + offendingSymbol.text.length,
                message: 'Expecting arguments before symbol )',
                level: types_1.ParseErrorLevel.ERROR
            });
        }
        else {
            this.errors.push({
                line: line - 1,
                start: charPositionInLine,
                end: charPositionInLine + offendingSymbol.text.length,
                message: msg,
                level: types_1.ParseErrorLevel.ERROR
            });
        }
    }
}
__decorate([
    Decorators_1.Override
], ErrorListener.prototype, "syntaxError", null);
exports.ErrorListener = ErrorListener;
//# sourceMappingURL=errorListener.js.map