/**
 * This ts file provides settings mode parser function.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const settingsSyntacticParser_1 = require("./compiler/settingsSyntacticParser");
const symbolTableGenerator_1 = require("./compiler/symbolTableGenerator");
const errorListener_1 = require("../tools/errorListener");
class SettingsParser {
    parse(input) {
        let errorListener = new errorListener_1.ErrorListener();
        let tree = settingsSyntacticParser_1.SettingsSyntacticParser.parseWithErrorListener(input, errorListener);
        symbolTableGenerator_1.SymbolTableGenerator.symbolTableFor(tree, errorListener);
        return {
            ast: tree,
            errors: errorListener.errors
        };
    }
}
exports.SettingsParser = SettingsParser;
//# sourceMappingURL=parser.js.map