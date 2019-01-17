/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const histogramRenderer_1 = require("./histogramRenderer");
var RenderBuilder;
(function (RenderBuilder) {
    function instanceFrom(result) {
        return new histogramRenderer_1.HistogramRenderer(result);
    }
    RenderBuilder.instanceFrom = instanceFrom;
})(RenderBuilder = exports.RenderBuilder || (exports.RenderBuilder = {}));
//# sourceMappingURL=renderBuilder.js.map