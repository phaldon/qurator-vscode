"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This TS file provides DependentPath
 */
const path = require("path");
var Util;
(function (Util) {
    // Get path util
    function getOSDependentPath(_path) {
        let pathInOS = path.resolve(__dirname, _path);
        if (process.platform === 'win32') {
            pathInOS = pathInOS.replace(/\\/g, '/');
        }
        return pathInOS;
    }
    Util.getOSDependentPath = getOSDependentPath;
})(Util = exports.Util || (exports.Util = {}));
//# sourceMappingURL=utils.js.map