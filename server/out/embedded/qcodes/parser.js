/**
 * This ts file provides qcodes mode parser function.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const symbolTableGenerator_1 = require("./compiler/symbolTableGenerator");
const semanticAnalyzer_1 = require("./compiler/semanticAnalyzer");
const qcodesSyntacticParser_1 = require("./compiler/qcodesSyntacticParser");
const errorListener_1 = require("../tools/errorListener");
class QcodesParser {
    parse(input) {
        let errorListener = new errorListener_1.ErrorListener();
        let tree = qcodesSyntacticParser_1.QcodesSyntacticParser.parseWithErrorListener(input, errorListener);
        let symbolTable = symbolTableGenerator_1.SymbolTableGenerator.symbolTableFor(tree, errorListener);
        semanticAnalyzer_1.SemanticAnalyzer.analyze(tree, symbolTable, errorListener);
        return {
            ast: tree,
            errors: errorListener.errors
        };
    }
}
exports.QcodesParser = QcodesParser;
//# sourceMappingURL=parser.js.map