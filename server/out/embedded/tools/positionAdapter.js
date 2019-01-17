/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var PositionAdapter;
(function (PositionAdapter) {
    function fromTerminalNode(node) {
        return {
            line: node.symbol.line - 1,
            start: node.symbol.charPositionInLine,
            end: node.symbol.charPositionInLine + node.text.length
        };
    }
    PositionAdapter.fromTerminalNode = fromTerminalNode;
    function fromToken(token) {
        return {
            line: token.line - 1,
            start: token.charPositionInLine,
            end: token.charPositionInLine + token.text.length
        };
    }
    PositionAdapter.fromToken = fromToken;
})(PositionAdapter = exports.PositionAdapter || (exports.PositionAdapter = {}));
//# sourceMappingURL=positionAdapter.js.map