"use strict";
/**
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../../types");
var ErrorBuilder;
(function (ErrorBuilder) {
    function warning(message, item) {
        return {
            line: item.start.line,
            start: item.start.column,
            end: item.end.column,
            message,
            level: types_1.ParseErrorLevel.WARNING
        };
    }
    ErrorBuilder.warning = warning;
})(ErrorBuilder = exports.ErrorBuilder || (exports.ErrorBuilder = {}));
//# sourceMappingURL=errorBuilder.js.map