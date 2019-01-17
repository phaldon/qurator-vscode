/**
 * This ts file provides the service of settings mode, include the validation, complete,
 * hover and other functions.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const languageModelCache_1 = require("../languageModelCache");
const vscode_languageserver_types_1 = require("vscode-languageserver-types");
const compilation_1 = require("../embedded/compilation");
const parser_1 = require("../embedded/settings/parser");
const suggester_1 = require("../embedded/settings/suggester");
function getSettingsMode(documentRegions) {
    let embeddedSettingsDocuments = languageModelCache_1.getLanguageModelCache(10, 60, document => documentRegions.get(document).getEmbeddedDocument('settings'));
    let compilationTool = new compilation_1.CompilationTool(new parser_1.SettingsParser(), new suggester_1.SettingsSuggester());
    return {
        getId() {
            return 'settings';
        },
        doValidation(document) {
            let embedded = embeddedSettingsDocuments.get(document);
            return compilationTool.validateDocument(embedded);
        },
        doComplete(document, embeddedPosition) {
            let embedded = embeddedSettingsDocuments.get(document);
            let content = { textDocument: embedded, position: embeddedPosition };
            return compilationTool.availableCompletions(content) || vscode_languageserver_types_1.CompletionList.create();
        },
        doResolve(item) {
            return compilationTool.completionDetailsFor(item);
        },
        doHover(document, position) {
            return compilationTool.doHover(document, position);
        },
        onDocumentRemoved(document) {
            embeddedSettingsDocuments.onDocumentRemoved(document);
        },
        dispose() {
            embeddedSettingsDocuments.dispose();
        }
    };
}
exports.getSettingsMode = getSettingsMode;
//# sourceMappingURL=settingsMode.js.map