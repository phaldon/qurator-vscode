/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import { RenderStrategy } from './types';
import { HistogramRenderer } from './histogramRenderer';

export namespace RenderBuilder {
    export function instanceFrom(result: object): RenderStrategy {
        
        return new HistogramRenderer(result);
    }

}
