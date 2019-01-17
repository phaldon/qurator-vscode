"use strict";
/**
 * This TS file provides validation environment variables
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("q");
const commandExecutor_1 = require("../commandExecutor");
const version_1 = require("../version");
class Dependency {
    constructor(name, version) {
        this.name = name;
        this.requiredVersion = version;
        this.installedVersion = null;
    }
    // Is the version correct?
    isInstalled() {
        // We can check if Python is installed by invoking it with the
        // --version option.
        return Q.Promise((resolve, reject) => {
            return this.getInstalledVersion().then(installedVersion => {
                if (this.name === 'python') {
                    if (installedVersion.isPythonVersion(this.requiredVersion)) {
                        resolve(this);
                    }
                    else {
                        reject(`Version = ${this.requiredVersion.toString()} of package ${this.name} is required`);
                    }
                }
                else {
                    if (installedVersion.isGreater(this.requiredVersion) ||
                        installedVersion.isEqual(this.requiredVersion)) {
                        resolve(this);
                    }
                    else {
                        reject(`Version >= ${this.requiredVersion.toString()} of package ${this.name} is required`);
                    }
                }
            });
        });
    }
    // Get local and configuration versions
    getInstalledVersion(force = false) {
        return Q.Promise((resolve, reject) => {
            if (!force && this.installedVersion !== null) {
                return resolve(this.installedVersion);
            }
            return commandExecutor_1.CommandExecutor.exec(this.name, ['--version'])
                .then(stdout => {
                const patt = /\d{1,2}\.\d{1,2}\.\d{1,2}|\d{1,2}\.\d{1,2}/g;
                this.installedVersion = version_1.Version.fromString(stdout.match(patt)[0]);
                resolve(this.installedVersion);
            })
                .catch(err => {
                reject(err);
            });
        });
    }
}
exports.Dependency = Dependency;
//# sourceMappingURL=dependency.js.map