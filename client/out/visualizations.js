/**
 * This TS file provides License VizManager
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const renderBuilder_1 = require("./visualizations/renderBuilder");
var VizManager;
(function (VizManager) {
    function createViz(result) {
        let renderer = renderBuilder_1.RenderBuilder.instanceFrom(result);
        return renderer.render();
    }
    VizManager.createViz = createViz;
})(VizManager = exports.VizManager || (exports.VizManager = {}));
//# sourceMappingURL=visualizations.js.map