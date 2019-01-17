/**
 * This TS file provides html RenderBuilder
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const preformattedRenderer_1 = require("../preformattedRenderer");
const histogramRenderer_1 = require("../histogramRenderer");
var RenderBuilder;
(function (RenderBuilder) {
    function instanceFrom(codePath, result) {
        return detectProperViz(codePath, result);
    }
    RenderBuilder.instanceFrom = instanceFrom;
    function detectProperViz(codePath, result) {
        if (neededHistogramRenderer(codePath)) {
            return new histogramRenderer_1.HistogramRenderer(result);
        }
        return new preformattedRenderer_1.PreformattedRenderer(result);
    }
    function neededHistogramRenderer(codePath) {
        let codeFile = undefined;
        codeFile = fs.readFileSync(codePath, { encoding: 'utf8' });
        if (codeFile !== undefined) {
            codeFile = codeFile.split('\n');
            codeFile = codeFile.filter(Boolean);
            let codeFileArray = [];
            for (let key in codeFile) {
                if (key) {
                    codeFileArray.push(codeFile[key]);
                }
            }
            let codeFileArrayRev = codeFileArray.reverse();
            for (let i = 0; i < codeFileArrayRev.length; i++) {
                if (new RegExp(/^\/\/.*/g).test(codeFileArrayRev[i]) === true ||
                    new RegExp(/^#.*/g).test(codeFileArrayRev[i]) === true) {
                    //Comment to end the file, go to the next line
                }
                else if (new RegExp(/^ *print\(.*\.get_counts\(.*\)\)/g).test(codeFileArrayRev[i]) === true) {
                    // If the result is printed using the get_counts, the proper viz to show is the histogram
                    return true;
                }
                else if (new RegExp(/^ *print\(.*\._result.*\)\)/g).test(codeFileArrayRev[i]) === true) {
                    return true;
                }
                // else {
                //     // If we don't find the proper viz method, continue seeking for that.
                //     // If the array ends without a proper result, we will render it as text.
                // }
            }
            // return new PreformattedRenderer(result);
        }
        // else {
        //     return new PreformattedRenderer(result);
        // }
        return false;
    }
})(RenderBuilder = exports.RenderBuilder || (exports.RenderBuilder = {}));
//# sourceMappingURL=renderBuilder.js.map