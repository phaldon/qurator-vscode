/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const CPP14Parser_1 = require("./antlr/CPP14Parser");
const CPP14Lexer_1 = require("./antlr/CPP14Lexer");
const errorListener_1 = require("../tools/errorListener");
class CppParser {
    parse(input) {
        let errorListener = new errorListener_1.ErrorListener();
        let parser = this.buildCppParser(input, errorListener);
        let tree = parser.translationunit();
        return {
            ast: tree,
            errors: errorListener.errors
        };
    }
    buildCppParser(input, errorListener) {
        let inputStream = new antlr4ts_1.ANTLRInputStream(input);
        let lexer = new CPP14Lexer_1.CPP14Lexer(inputStream);
        lexer.removeErrorListener(antlr4ts_1.ConsoleErrorListener.INSTANCE);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new CPP14Parser_1.CPP14Parser(tokenStream);
        parser.addErrorListener(errorListener);
        return parser;
    }
}
exports.CppParser = CppParser;
//# sourceMappingURL=parser.js.map