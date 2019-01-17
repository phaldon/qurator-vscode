/**
 * This ts file provides settings parser, include parse and parse with error listener function.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const settingLexer_1 = require("../antlr/settingLexer");
const settingParser_1 = require("../antlr/settingParser");
var SettingsSyntacticParser;
(function (SettingsSyntacticParser) {
    function parse(input) {
        let inputStream = new antlr4ts_1.ANTLRInputStream(input);
        let lexer = new settingLexer_1.settingLexer(inputStream);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new settingParser_1.settingParser(tokenStream);
        return parser.qsetting();
    }
    SettingsSyntacticParser.parse = parse;
    function parseWithErrorListener(input, errorListener) {
        let inputStream = new antlr4ts_1.ANTLRInputStream(input);
        let lexer = new settingLexer_1.settingLexer(inputStream);
        lexer.removeErrorListener(antlr4ts_1.ConsoleErrorListener.INSTANCE);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new settingParser_1.settingParser(tokenStream);
        parser.addErrorListener(errorListener);
        return parser.qsetting();
    }
    SettingsSyntacticParser.parseWithErrorListener = parseWithErrorListener;
    function ruleNames() {
        return settingParser_1.settingParser.ruleNames;
    }
    SettingsSyntacticParser.ruleNames = ruleNames;
})(SettingsSyntacticParser = exports.SettingsSyntacticParser || (exports.SettingsSyntacticParser = {}));
//# sourceMappingURL=settingsSyntacticParser.js.map