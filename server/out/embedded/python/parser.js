/**
 * This ts file provides the parser function of pyqpanda.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const Python3Parser_1 = require("./antlr/Python3Parser");
const Python3Lexer_1 = require("./antlr/Python3Lexer");
const treeFolder_1 = require("./ast/treeFolder");
const symbolTableGenerator_1 = require("./ast/symbolTableGenerator");
const semanticAnalyzer_1 = require("./ast/semanticAnalyzer");
const importsAnalyzer_1 = require("./ast/importsAnalyzer");
const errorListener_1 = require("../tools/errorListener");
class PythonParser {
    parse(input) {
        let errorListener = new errorListener_1.ErrorListener();
        let parser = this.buildPyQpandaParser(input, errorListener);
        let tree = parser.program();
        let folder = new treeFolder_1.TreeFolder();
        let codeBlock = folder.visit(tree);
        let symbolTable = symbolTableGenerator_1.SymbolTableGenerator.symbolTableFor(codeBlock);
        let errors = semanticAnalyzer_1.SemanticAnalyzer.analyze(codeBlock, symbolTable);
        importsAnalyzer_1.ImportsAnalyzer.analyze(tree, errorListener);
        return {
            ast: tree,
            errors: errorListener.errors.concat(errors)
        };
    }
    buildPyQpandaParser(input, errorListener) {
        let inputStream = new antlr4ts_1.ANTLRInputStream(input);
        let lexer = new Python3Lexer_1.Python3Lexer(inputStream);
        lexer.removeErrorListener(antlr4ts_1.ConsoleErrorListener.INSTANCE);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new Python3Parser_1.Python3Parser(tokenStream);
        parser.addErrorListener(errorListener);
        return parser;
    }
}
exports.PythonParser = PythonParser;
//# sourceMappingURL=parser.js.map