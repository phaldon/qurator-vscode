"use strict";
/**
 * This TS file provides a package information parser
 */
Object.defineProperty(exports, "__esModule", { value: true });
var PackageInfoParser;
(function (PackageInfoParser) {
    function parseName(input) {
        return /Name:\s*(.+)/g.exec(input)[1].trim();
    }
    PackageInfoParser.parseName = parseName;
    function parseVersion(input) {
        return /Version:\s*(.+)/g.exec(input)[1].trim();
    }
    PackageInfoParser.parseVersion = parseVersion;
    function parseSummary(input) {
        return /Summary:\s*(.+)/g.exec(input)[1].trim();
    }
    PackageInfoParser.parseSummary = parseSummary;
    function parseLocation(input) {
        return /Location:\s*(.+)/g.exec(input)[1].trim();
    }
    PackageInfoParser.parseLocation = parseLocation;
    function parseDependencies(input) {
        return /Requires:\s*(.+)/g.exec(input)[1].trim();
    }
    PackageInfoParser.parseDependencies = parseDependencies;
})(PackageInfoParser = exports.PackageInfoParser || (exports.PackageInfoParser = {}));
//# sourceMappingURL=packageInfoParser.js.map