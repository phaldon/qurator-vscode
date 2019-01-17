/**
 * This ts file provides the python suggester, include calculate suggestions for python
 * and pyqpanda's symbols dictionary.
 */

'use strict';

import { Suggester, SuggestionSymbol } from '../types';
import { SuggestionsDictionary } from './suggestions/suggestionsDictionary';
import { ANTLRInputStream, CommonTokenStream, ParserRuleContext } from 'antlr4ts';
import { Python3Lexer } from './antlr/Python3Lexer';
import { Python3Parser } from './antlr/Python3Parser';
import { SuggestionsCalculator } from './suggestions/suggestionsCalculator';
import { AtomFinder } from './suggestions/atomFinder';
import { MethodsDictionary } from './suggestions/methodsDictionary';
import { VariablesDictionary } from './suggestions/variablesDictionary';
import { SymbolTableGenerator } from './ast/symbolTableGenerator';
import { TreeFolder } from './ast/treeFolder';
import { SymbolTable } from '../compiler/types';

export class PythonSuggester implements Suggester {
    private dictionary = new SuggestionsDictionary();

    calculateSuggestionsFor(input: string): SuggestionSymbol[] {
        let { parser, tokenStream, symbolTable } = this.parse(input);
        let suggestionCalculator = this.buildSuggestionsCalculator(symbolTable, tokenStream, parser);
        let caretPosition = tokenStream.getTokens().length;

        return suggestionCalculator.calculateAtPosition(caretPosition);
    }

    availableSymbols(): SuggestionSymbol[] {
        return this.dictionary.allSymbols();
    }

    private parse(input: string) {
        let inputStream = new ANTLRInputStream(input);
        let lexer = new Python3Lexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new Python3Parser(tokenStream);

        let tree = parser.program();
        let symbolTable = this.buildSymbolTable(tree);

        return { parser, tokenStream, symbolTable };
    }

    private buildSuggestionsCalculator(
        symbolTable: SymbolTable,
        tokenStream: CommonTokenStream,
        parser: Python3Parser
    ) {
        let atomFinder = new AtomFinder(symbolTable);
        let methodsDictionary = new MethodsDictionary(atomFinder, tokenStream, this.dictionary);
        let variablesDictionary = new VariablesDictionary(symbolTable);
        let suggestionCalculator = new SuggestionsCalculator(
            parser,
            this.dictionary,
            methodsDictionary,
            variablesDictionary
        );

        return suggestionCalculator;
    }

    private buildSymbolTable(tree: ParserRuleContext) {
        let treeFolder = new TreeFolder();
        let statements = treeFolder.visit(tree);
        let symbolTable = SymbolTableGenerator.symbolTableFor(statements);

        return symbolTable;
    }
}
