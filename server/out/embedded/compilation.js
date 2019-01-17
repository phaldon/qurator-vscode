/**
 * This ts file provides the mode's base function, includes validation, completion, hover and etc.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("vscode-languageserver/lib/main");
const types_1 = require("./types");
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
const suggestionSymbolAdapter_1 = require("./tools/suggestionSymbolAdapter");
const types_2 = require("./types");
class CompilationTool {
    constructor(parser, suggester) {
        this.parser = parser;
        this.suggester = suggester;
        this.currentDocument = null;
        this.currentSuggestions = [];
    }
    // Validations of modes(settings, qcodes) depends on antlr, return errors. 
    validateDocument(document) {
        this.currentDocument = document;
        let result = this.parser.parse(document.getText());
        return this.launchCompilationErrors(result.errors);
    }
    // Automatic completion of modes, return CompletionList(contains isIncomplete and suggestions)
    availableCompletions(documentPosition) {
        let resultNull = { isIncomplete: false, items: [] };
        if (this.currentDocument === null) {
            return resultNull;
        }
        let textToCaret = this.currentDocument.getText()
            .substring(0, this.currentDocument.offsetAt(documentPosition.position) - 1);
        this.currentSuggestions = this.suggester
            .calculateSuggestionsFor(textToCaret)
            .map(suggestionSymbolAdapter_1.SuggestionSymbolAdapter.toCompletionItem());
        let suggestions = this.currentSuggestions;
        let result = { isIncomplete: false, items: suggestions };
        return result;
    }
    // Completion details of modes.
    completionDetailsFor(item) {
        let searchedSymbol = this.getCompletionSymbolFor(item);
        item.detail = searchedSymbol.detail;
        item.documentation = searchedSymbol.documentation;
        return item;
    }
    // Hover function of modes, return the range and contents.
    doHover(document, position) {
        if (this.currentDocument === null) {
            return null;
        }
        let offset = document.offsetAt(position);
        let codeAndPostion = this.findNode(offset, document);
        this.currentSuggestions = this.suggester.availableSymbols();
        for (let s of this.currentSuggestions) {
            if (s.label == codeAndPostion.code) {
                let str = "";
                if (typeof s.documentation == 'string') {
                    str = s.documentation;
                }
                else {
                    str += s.documentation.toString;
                }
                return {
                    range: vscode_languageserver_types_1.Range.create(document.positionAt(codeAndPostion.start + 1), document.positionAt(codeAndPostion.end)),
                    contents: [{ language: 'qrunes', value: codeAndPostion.code }, vscode_languageserver_types_1.MarkedString.fromPlainText(str)]
                };
            }
        }
        return null;
    }
    getCompletionSymbolFor(item) {
        let isSameData = (symbol) => symbol.label === item.label;
        let availableOptions = this.currentSuggestions.filter(isSameData);
        if (availableOptions.length < 1) {
            return {
                label: item.label,
                detail: '',
                documentation: ''
            };
        }
        return availableOptions[0];
    }
    launchCompilationErrors(errors) {
        let diagnostics = [];
        errors.forEach(error => {
            diagnostics.push(this.errorToDiagnostics(error));
        });
        return diagnostics;
    }
    errorToDiagnostics(error) {
        return {
            severity: error.level === types_1.ParseErrorLevel.ERROR ? main_1.DiagnosticSeverity.Error : main_1.DiagnosticSeverity.Warning,
            range: {
                start: {
                    line: error.line,
                    character: error.start
                },
                end: {
                    line: error.line,
                    character: error.end
                }
            },
            message: error.message,
            source: 'ex'
        };
    }
    findNode(offset, document) {
        let codeMinArr = [];
        let startCode = 0;
        let endCode = 0;
        for (let i = 1; i <= offset; i++) {
            let rangeMin = vscode_languageserver_types_1.Range.create(document.positionAt(offset - i), document.positionAt(offset - i + 1));
            let strMin = document.getText(rangeMin);
            if (strMin in types_2.specificSymbol) {
                startCode = offset - i;
                break;
            }
            codeMinArr.push(strMin);
        }
        let codeMax = "";
        for (let j = 0; j <= 100; j++) {
            let rangeMax = vscode_languageserver_types_1.Range.create(document.positionAt(offset + j), document.positionAt(offset + j + 1));
            let strMax = document.getText(rangeMax);
            if (strMax in types_2.specificSymbol) {
                endCode = offset + j;
                break;
            }
            codeMax += strMax;
        }
        let codeMin = "";
        if (codeMinArr != null) {
            for (let k = codeMinArr.length - 1; k >= 0; k--) {
                codeMin += codeMinArr[k];
            }
        }
        return {
            code: codeMin + codeMax,
            start: startCode,
            end: endCode
        };
    }
}
exports.CompilationTool = CompilationTool;
//# sourceMappingURL=compilation.js.map