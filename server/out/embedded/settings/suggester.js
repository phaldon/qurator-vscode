/**
 * This ts file provides settings suggester, include calculate suggestions for settings
 * and settings's symbols dictionary.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const antlr4_c3_1 = require("antlr4-c3");
const settingParser_1 = require("./antlr/settingParser");
const settingLexer_1 = require("./antlr/settingLexer");
class SettingsSuggester {
    constructor() {
        this.dictionary = new SymbolsDictionary();
    }
    calculateSuggestionsFor(input) {
        let inputStream = new antlr4ts_1.ANTLRInputStream(input);
        let lexer = new settingLexer_1.settingLexer(inputStream);
        let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
        let parser = new settingParser_1.settingParser(tokenStream);
        parser.qsetting();
        return this.calculateCandidates(parser, tokenStream.getTokens().length);
    }
    availableSymbols() {
        return this.dictionary.allSymbols();
    }
    calculateCandidates(parser, caretPosition) {
        let core = new antlr4_c3_1.CodeCompletionCore(parser);
        core.ignoredTokens = new Set([
            settingLexer_1.settingLexer.SEMI
        ]);
        let candidates = core.collectCandidates(caretPosition);
        let keywords = [];
        for (let candidate of candidates.tokens) {
            keywords.push(parser.vocabulary.getSymbolicName(candidate[0]));
        }
        let functionNames = [];
        let variableNames = [];
        let suggestions = [];
        suggestions.push(...keywords);
        suggestions.push(...functionNames);
        suggestions.push(...variableNames);
        let result = [];
        result.push(...this.dictionary.symbolsWithTypeIn(suggestions));
        return result;
    }
}
exports.SettingsSuggester = SettingsSuggester;
class SymbolsDictionary {
    constructor() {
        this.symbols = [
            {
                label: 'language',
                detail: 'Decide the language type of script(Python/C++).',
                documentation: 'To indicate which programming language needed to be imported, support Python and C++ to be choosed currently.',
                type: 'LANGUAGE',
                parent: 'SETTINGS',
                data: {
                    languageId: 'settings'
                }
            },
            {
                label: 'autoimport',
                detail: 'Decide automatic import is allowed or not.',
                documentation: 'Load the lib or package automatically or not.',
                type: 'AUTOIMPORT',
                parent: 'SETTINGS',
                data: {
                    languageId: 'settings'
                }
            },
            {
                label: 'compile_only',
                detail: 'Decide whether to compile or compile && run with result.',
                documentation: 'Load the lib or package automatically or not.',
                type: 'COMPILE_ONLY',
                parent: 'SETTINGS',
                data: {
                    languageId: 'settings'
                }
            },
            {
                label: 'Python',
                detail: 'Import python script.',
                documentation: 'In the script mode, you can coding with Python language.',
                type: 'Identifier',
                parent: 'SETTINGS',
                data: {
                    languageId: 'settings'
                }
            },
            {
                label: 'C++',
                detail: 'Import c++ script.',
                documentation: 'In the script mode, you can coding with C++ language.',
                type: 'Identifier',
                parent: 'SETTINGS',
                data: {
                    languageId: 'settings'
                }
            },
            {
                label: 'True',
                detail: '',
                documentation: '',
                type: 'Identifier',
                parent: 'SETTINGS',
                data: {
                    languageId: 'settings'
                }
            },
            {
                label: 'False',
                detail: '',
                documentation: '',
                type: 'Identifier',
                parent: 'SETTINGS',
                data: {
                    languageId: 'settings'
                }
            }
        ];
    }
    allSymbols() {
        return this.symbols;
    }
    symbolsWithTypeIn(types) {
        let isContainedInTypes = (symbol) => types.indexOf(symbol.type) > -1;
        return this.symbols.filter(isContainedInTypes);
    }
}
//# sourceMappingURL=suggester.js.map