"use strict";
/**
 * This TS file provides  PyPiExecutor
 */
Object.defineProperty(exports, "__esModule", { value: true });
const httpm = require("typed-rest-client/HttpClient");
const version_1 = require("../version");
const PYPI_BASE_URL = 'https://pypi.python.org/pypi/';
class PyPiExecutor {
    constructor() { }
    // Get package info
    async getPackageInfo(pkg) {
        let url = PYPI_BASE_URL + pkg + '/json';
        let httpc = new httpm.HttpClient('vsts-node-api');
        return httpc.get(url).then((res) => {
            return res.readBody().then((body) => {
                let pypiPkgJson = JSON.parse(body);
                return {
                    name: pypiPkgJson.info.name,
                    version: version_1.Version.fromString(pypiPkgJson.info.version),
                    summary: pypiPkgJson.info.summary,
                    location: pypiPkgJson.info.package_url
                };
            });
        });
    }
}
exports.PyPiExecutor = PyPiExecutor;
//# sourceMappingURL=pypiExecutor.js.map