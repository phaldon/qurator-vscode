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
const fs = require("fs");
const nunjucks = require("nunjucks");
const utils_1 = require("../utils");
class HistogramRenderer {
    constructor(result) {
        this.result = result;
    }
    render() {
        let templatePath = utils_1.Util.getOSDependentPath('../../client/resources/html-templates/temp-plot-shots.html');
        let resultString = this.result.toString();
        try {
            return this.createFile(resultString, templatePath);
        }
        catch (err) {
            return `<pre>${resultString}</pre>`;
        }
    }
    createFile(countsArray, templatePath) {
        let template = fs.readFileSync(templatePath, { encoding: 'utf8' });
        if (template) {
            nunjucks.configure({ autoescape: false });
            return nunjucks.renderString(template, { bits: countsArray });
        }
        else {
            return `<pre>${countsArray}</pre>`;
        }
    }
    createHistogram(countsArray, templatePath) {
        let xArray = [];
        let yArray = [];
        const countsArrayOrd = {};
        Object.keys(countsArray)
            .sort()
            .forEach(key => {
            countsArrayOrd[key] = countsArray[key];
        });
        for (let element in countsArrayOrd) {
            if (element) {
                xArray.push(element);
                yArray.push(countsArray[element]);
            }
        }
        let template = fs.readFileSync(templatePath, { encoding: 'utf8' });
        if (template) {
            let context = {
                bits: xArray.map(element => `"${element}"`).join(','),
                bitsValues: yArray.map(element => `${element}`).join(',')
            };
            nunjucks.configure({ autoescape: false });
            return nunjucks.renderString(template, context);
        }
        else {
            return `<pre>${countsArray}</pre>`;
        }
    }
}
exports.HistogramRenderer = HistogramRenderer;
//# sourceMappingURL=histogramRenderer.js.map