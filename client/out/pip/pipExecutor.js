"use strict";
/**
 * This TS file provides Pip Executor
 */
Object.defineProperty(exports, "__esModule", { value: true });
const packageInfoParser_1 = require("./packageInfoParser");
const version_1 = require("../version");
const logger_1 = require("../logger");
class PipExecutor {
    constructor(commandExecutor) {
        this.commandExecutor = commandExecutor;
    }
    // Get package info
    async getPackageInfo(packageName) {
        let stdout = await this.show(packageName);
        return {
            name: packageInfoParser_1.PackageInfoParser.parseName(stdout),
            version: version_1.Version.fromString(packageInfoParser_1.PackageInfoParser.parseVersion(stdout)),
            summary: packageInfoParser_1.PackageInfoParser.parseSummary(stdout),
            location: packageInfoParser_1.PackageInfoParser.parseLocation(stdout),
            dependencies: packageInfoParser_1.PackageInfoParser.parseDependencies(stdout)
        };
    }
    // Update package
    async update(pkg) {
        try {
            const updateResult = await this.commandExecutor.exec('install', ['-U', '--no-cache-dir', pkg], (stdout) => stdout);
            logger_1.QLogger.verbose(`Package ${pkg} updated: ${updateResult}`, this);
            return true;
        }
        catch (err) {
            logger_1.QLogger.verbose(`Package ${pkg} not updated: ${err}`, this);
            return false;
        }
    }
    //Download package 
    async install(pkg) {
        try {
            const updateResult = await this.commandExecutor.exec('install', [pkg], (stdout) => stdout);
            logger_1.QLogger.verbose(`Package ${pkg} installed: ${updateResult}`, this);
            return true;
        }
        catch (err) {
            logger_1.QLogger.verbose(`Package ${pkg} not installed: ${err}`, this);
            return false;
        }
    }
    async search(pkg) {
        return this.commandExecutor.exec('search', [pkg], (stdout) => stdout);
    }
    async list() {
        return this.commandExecutor.exec('list', [], (stdout) => stdout);
    }
    async show(pkg) {
        return this.commandExecutor.exec('show', [pkg], (stdout) => stdout);
    }
}
exports.PipExecutor = PipExecutor;
//# sourceMappingURL=pipExecutor.js.map