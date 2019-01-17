/**
 * This ts file provides the python suggester, include calculate suggestions for python
 * and pyqpanda's symbols dictionary.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const suggestionsDictionary_1 = require("./suggestions/suggestionsDictionary");
const antlr4ts_1 = require("antlr4ts");
const Python3Lexer_1 = require("./antlr/Python3Lexer");
const Python3Parser_1 = require("./antlr/Python3Parser");
const suggestionsCalculator_1 = require("./suggestions/suggestionsCalculator");
const atomFinder_1 = require("./suggestions/atomFinder");
const methodsDictionary_1 = require("./suggestions/methodsDictionary");
const variablesDictionary_1 = require("./suggestions/variablesDictionary");
const symbolTableGenerator_1 = require("./ast/symbolTableGenerator");
const treeFolder_1 = require("./ast/treeFolder");
class PythonSuggester {
    constructor() {
        this.dictionary = new suggestionsDictionary_1.SuggestionsDictionary();
    }
    calculateSuggestionsFor(input) {
        let { parser, tokenStream, symbolTable } = this.parse(input);
        let suggestionCalculator = this.buildSuggestionsCalculator(symbolTable, tokenStream, parser);
        let caretPosition = tokenStream.getTokens().length;
        return suggestionCalculator.calculateAtPosition(caretPosition);
    }
    availableSymbols() {
        return this.dictionary.allSymbols();
    }
    parse(input) {
        let inputStream = new antlr4ts_1.ANTLRInputStream(input);
        let lexer = new Python3Lexer_1.Python3Lexer(inputStream);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new Python3Parser_1.Python3Parser(tokenStream);
        let tree = parser.program();
        let symbolTable = this.buildSymbolTable(tree);
        return { parser, tokenStream, symbolTable };
    }
    buildSuggestionsCalculator(symbolTable, tokenStream, parser) {
        let atomFinder = new atomFinder_1.AtomFinder(symbolTable);
        let methodsDictionary = new methodsDictionary_1.MethodsDictionary(atomFinder, tokenStream, this.dictionary);
        let variablesDictionary = new variablesDictionary_1.VariablesDictionary(symbolTable);
        let suggestionCalculator = new suggestionsCalculator_1.SuggestionsCalculator(parser, this.dictionary, methodsDictionary, variablesDictionary);
        return suggestionCalculator;
    }
    buildSymbolTable(tree) {
        let treeFolder = new treeFolder_1.TreeFolder();
        let statements = treeFolder.visit(tree);
        let symbolTable = symbolTableGenerator_1.SymbolTableGenerator.symbolTableFor(statements);
        return symbolTable;
    }
}
exports.PythonSuggester = PythonSuggester;
//# sourceMappingURL=suggester.js.map