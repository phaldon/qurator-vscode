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
class PreformattedRenderer {
    constructor(result) {
        this.result = result;
    }
    render() {
        return `<pre>${this.result}</pre>`;
    }
}
exports.PreformattedRenderer = PreformattedRenderer;
//# sourceMappingURL=preformattedRenderer.js.map