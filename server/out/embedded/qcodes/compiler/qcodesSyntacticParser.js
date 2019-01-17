/**
 * This ts file provides the parser of qcodes.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const qcodeLexer_1 = require("../antlr/qcodeLexer");
const qcodeParser_1 = require("../antlr/qcodeParser");
var QcodesSyntacticParser;
(function (QcodesSyntacticParser) {
    function parse(input) {
        let inputStream = new antlr4ts_1.ANTLRInputStream(input);
        let lexer = new qcodeLexer_1.qcodeLexer(inputStream);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new qcodeParser_1.qcodeParser(tokenStream);
        return parser.qrunes();
    }
    QcodesSyntacticParser.parse = parse;
    function parseWithErrorListener(input, errorListener) {
        let inputStream = new antlr4ts_1.ANTLRInputStream(input);
        let lexer = new qcodeLexer_1.qcodeLexer(inputStream);
        lexer.removeErrorListener(antlr4ts_1.ConsoleErrorListener.INSTANCE);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new qcodeParser_1.qcodeParser(tokenStream);
        parser.addErrorListener(errorListener);
        return parser.qrunes();
    }
    QcodesSyntacticParser.parseWithErrorListener = parseWithErrorListener;
    function ruleNames() {
        return qcodeParser_1.qcodeParser.ruleNames;
    }
    QcodesSyntacticParser.ruleNames = ruleNames;
})(QcodesSyntacticParser = exports.QcodesSyntacticParser || (exports.QcodesSyntacticParser = {}));
//# sourceMappingURL=qcodesSyntacticParser.js.map