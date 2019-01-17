"use strict";
/**
 * This TS file provides read environment variables
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("q");
const dependency_1 = require("./dependency");
const version_1 = require("../version");
const vscode_1 = require("vscode");
class DependencyMgr {
    constructor() {
        this._dependencies = [];
        const config = vscode_1.workspace.getConfiguration('qurator-vscode');
        const dependList = config.get('qurator.dependencies');
        Object.keys(dependList).forEach(key => {
            this._dependencies.push(new dependency_1.Dependency(key.toString(), version_1.Version.fromString(dependList[key].toString())));
        });
    }
    checkDependencies() {
        let packages = [];
        this._dependencies.forEach(dep => {
            packages.push(dep.isInstalled());
        });
        return Q.all(packages);
    }
}
exports.DependencyMgr = DependencyMgr;
//# sourceMappingURL=dependencyMgr.js.map