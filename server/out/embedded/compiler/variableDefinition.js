/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class VariableDefinition {
    constructor(symbol, startLine, endLine) {
        this.symbol = symbol;
        this.startLine = startLine;
        this.endLine = endLine;
    }
    nameEquals(name) {
        return this.symbol.name === name;
    }
    inScope(line) {
        return line >= this.startLine && line <= this.endLine;
    }
    toString() {
        return `{ ${this.symbol} from: ${this.startLine} to: ${this.endLine} }`;
    }
}
exports.VariableDefinition = VariableDefinition;
//# sourceMappingURL=variableDefinition.js.map