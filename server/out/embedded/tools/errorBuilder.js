/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
var ErrorBuilder;
(function (ErrorBuilder) {
    function error(message, position) {
        return {
            line: position.line,
            start: position.start,
            end: position.end,
            message,
            level: types_1.ParseErrorLevel.ERROR
        };
    }
    ErrorBuilder.error = error;
    function warning(message, position) {
        return {
            line: position.line,
            start: position.start,
            end: position.end,
            message,
            level: types_1.ParseErrorLevel.WARNING
        };
    }
    ErrorBuilder.warning = warning;
})(ErrorBuilder = exports.ErrorBuilder || (exports.ErrorBuilder = {}));
//# sourceMappingURL=errorBuilder.js.map