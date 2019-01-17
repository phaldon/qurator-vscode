/**
 *  This TS file provides ResultProvider
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class ResultProvider {
    constructor() {
        this._onDidChange = new vscode_1.EventEmitter();
    }
    displayContent(content, uri) {
        this.content = content;
        this.update(uri);
    }
    provideTextDocumentContent() {
        return this.content;
    }
    get onDidChange() {
        return this._onDidChange.event;
    }
    update(uri) {
        this._onDidChange.fire(uri);
    }
}
exports.ResultProvider = ResultProvider;
//# sourceMappingURL=resultProvider.js.map