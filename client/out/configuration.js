"use strict";
/**
 * This TS file provides read Configuration info.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const version_1 = require("./version");
// Get qrunes package by map
var qrunesVSCodeConfiguration;
(function (qrunesVSCodeConfiguration) {
    function requiredPackages() {
        let config = vscode_1.workspace.getConfiguration('qurator-vscode');
        let qrunesPackages = config.get('qrunes.packages');
        return Object.keys(qrunesPackages).map(key => ({
            name: key,
            version: version_1.Version.fromString(qrunesPackages[key])
        }));
    }
    qrunesVSCodeConfiguration.requiredPackages = requiredPackages;
})(qrunesVSCodeConfiguration = exports.qrunesVSCodeConfiguration || (exports.qrunesVSCodeConfiguration = {}));
//# sourceMappingURL=configuration.js.map