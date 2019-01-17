"use strict";
/**
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("antlr4ts/tree");
var ImportsAnalyzer;
(function (ImportsAnalyzer) {
    function analyze(tree, errorListener) {
        let validator = new ImportsValidator(errorListener);
        tree.accept(validator);
    }
    ImportsAnalyzer.analyze = analyze;
})(ImportsAnalyzer = exports.ImportsAnalyzer || (exports.ImportsAnalyzer = {}));
class ImportsValidator extends tree_1.AbstractParseTreeVisitor {
    constructor(errorListener) {
        super();
        this.errorListener = errorListener;
        this.imported = [];
    }
    defaultResult() { }
    visitImport_as_name(ctx) {
        this.imported.push(ctx.text);
    }
}
//# sourceMappingURL=importsAnalyzer.js.map