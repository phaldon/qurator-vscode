/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Python3Parser_1 = require("../antlr/Python3Parser");
const antlr4_c3_1 = require("antlr4-c3");
const Python3Lexer_1 = require("../antlr/Python3Lexer");
class SuggestionsCalculator {
    constructor(parser, suggestionsDictionary, methodsDictionary, variablesDictionary) {
        this.parser = parser;
        this.suggestionsDictionary = suggestionsDictionary;
        this.methodsDictionary = methodsDictionary;
        this.variablesDictionary = variablesDictionary;
    }
    calculateAtPosition(tokenPosition) {
        let core = new antlr4_c3_1.CodeCompletionCore(this.parser);
        core.ignoredTokens = GrammarElements.ignorableTokens();
        core.preferredRules = GrammarElements.requiredRules();
        let candidates = core.collectCandidates(tokenPosition);
        let allowedSymbols = [];
        for (let candidate of candidates.tokens) {
            let terminal = this.parser.vocabulary.getSymbolicName(candidate[0]);
            allowedSymbols.push(terminal);
        }
        for (let candidate of candidates.rules) {
            let rule = this.parser.ruleNames[candidate[0]];
            allowedSymbols.push(rule);
        }
        let result = this.calculateSuggestions(allowedSymbols);
        return result;
    }
    calculateSuggestions(allowedSymbols) {
        let result = [];
        if (allowedSymbols.includes('trailer')) {
            result.push(...this.methodsDictionary.currentMethods());
        }
        if (allowedSymbols.includes('atom')) {
            result.push(...this.variablesDictionary.currentVariables());
            result.push(...this.suggestionsDictionary.symbolsWithTypeIn(['class']));
        }
        return result;
    }
}
exports.SuggestionsCalculator = SuggestionsCalculator;
var GrammarElements;
(function (GrammarElements) {
    function ignorableTokens() {
        return new Set([
            Python3Lexer_1.Python3Lexer.EOF,
            Python3Lexer_1.Python3Lexer.NOT,
            Python3Lexer_1.Python3Lexer.STAR,
            Python3Lexer_1.Python3Lexer.ADD,
            Python3Lexer_1.Python3Lexer.MINUS,
            Python3Lexer_1.Python3Lexer.NOT_OP,
            Python3Lexer_1.Python3Lexer.OPEN_PAREN,
            Python3Lexer_1.Python3Lexer.OPEN_BRACK,
            Python3Lexer_1.Python3Lexer.OPEN_BRACE,
            Python3Lexer_1.Python3Lexer.DECIMAL_INTEGER,
            Python3Lexer_1.Python3Lexer.OCT_INTEGER,
            Python3Lexer_1.Python3Lexer.HEX_INTEGER,
            Python3Lexer_1.Python3Lexer.BIN_INTEGER,
            Python3Lexer_1.Python3Lexer.FLOAT_NUMBER,
            Python3Lexer_1.Python3Lexer.IMAG_NUMBER,
            Python3Lexer_1.Python3Lexer.STRING_LITERAL,
            Python3Lexer_1.Python3Lexer.BYTES_LITERAL,
            Python3Lexer_1.Python3Lexer.ELLIPSIS,
            Python3Lexer_1.Python3Lexer.LAMBDA,
            Python3Lexer_1.Python3Lexer.DEL,
            Python3Lexer_1.Python3Lexer.PASS,
            Python3Lexer_1.Python3Lexer.BREAK,
            Python3Lexer_1.Python3Lexer.CONTINUE,
            Python3Lexer_1.Python3Lexer.RETURN,
            Python3Lexer_1.Python3Lexer.RAISE,
            Python3Lexer_1.Python3Lexer.YIELD,
            Python3Lexer_1.Python3Lexer.IMPORT,
            Python3Lexer_1.Python3Lexer.FROM,
            Python3Lexer_1.Python3Lexer.GLOBAL,
            Python3Lexer_1.Python3Lexer.NONLOCAL,
            Python3Lexer_1.Python3Lexer.ASSERT,
            Python3Lexer_1.Python3Lexer.IF,
            Python3Lexer_1.Python3Lexer.WHILE,
            Python3Lexer_1.Python3Lexer.FOR,
            Python3Lexer_1.Python3Lexer.TRY,
            Python3Lexer_1.Python3Lexer.WITH,
            Python3Lexer_1.Python3Lexer.DEF,
            Python3Lexer_1.Python3Lexer.CLASS,
            Python3Lexer_1.Python3Lexer.AT,
            Python3Lexer_1.Python3Lexer.NEWLINE
        ]);
    }
    GrammarElements.ignorableTokens = ignorableTokens;
    function requiredRules() {
        return new Set([Python3Parser_1.Python3Parser.RULE_atom, Python3Parser_1.Python3Parser.RULE_trailer]);
    }
    GrammarElements.requiredRules = requiredRules;
})(GrammarElements || (GrammarElements = {}));
//# sourceMappingURL=suggestionsCalculator.js.map