/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const variableDefinition_1 = require("../../compiler/variableDefinition");
const symbols_1 = require("../../compiler/symbols");
const MAX_LINE = 65536;
class Scope {
    constructor(parentScope, name, startLine = 1) {
        this.parentScope = parentScope;
        this.name = name;
        this.startLine = startLine;
        this.dictionary = new Map();
        this.childs = [];
        this.endLine = MAX_LINE;
    }
    lookup(symbolName, line = MAX_LINE) {
        let symbol = this.searchInScope(symbolName, line);
        if (symbol) {
            return symbol;
        }
        symbol = this.searchInLocalScope(symbolName, line);
        if (symbol) {
            return symbol;
        }
        return this.lookupParent(symbolName, line);
    }
    define(symbol, declarationLine) {
        if (this.dictionary.has(symbol.name)) {
            let lastDefinition = this.dictionary.get(symbol.name).pop();
            lastDefinition.endLine = declarationLine;
            this.dictionary.get(symbol.name).push(lastDefinition);
            let variableDefinition = new variableDefinition_1.VariableDefinition(symbol, declarationLine + 1, MAX_LINE);
            this.dictionary.get(symbol.name).push(variableDefinition);
        }
        else {
            let variableDefinition = new variableDefinition_1.VariableDefinition(symbol, declarationLine + 1, MAX_LINE);
            this.dictionary.set(symbol.name, [variableDefinition]);
        }
    }
    closeScopeAt(line) {
        this.dictionary.forEach(variables => variables.forEach(variable => (variable.endLine = line)));
        this.endLine = line;
    }
    inScopeAt(line) {
        return line >= this.startLine && line <= this.endLine;
    }
    definedSymbols() {
        let symbols = [];
        if (this.parentScope) {
            symbols.push(...this.parentScope.definedSymbols());
        }
        let noBuiltInSymbols = Array.from(this.dictionary.values())
            .map(variableDefinition => variableDefinition[variableDefinition.length - 1].symbol)
            .filter(symbol => !(symbol instanceof symbols_1.BuiltInTypeSymbol));
        symbols.push(...noBuiltInSymbols);
        return symbols;
    }
    print(level = 1) {
        let tabs = `${this.tabsGenerator(level - 1)}`;
        console.log(`${tabs}Scope "${this.name}" from ${this.startLine} to ${this.endLine} => `);
        this.printEntries(level);
        this.childs.forEach(child => child.print(level + 1));
    }
    searchInScope(symbolName, line = MAX_LINE) {
        if (!this.dictionary.has(symbolName)) {
            return null;
        }
        let variableDefinition = this.dictionary.get(symbolName).find(variableDefinition => {
            return variableDefinition.nameEquals(symbolName) && variableDefinition.inScope(line);
        });
        return this.unwrapSymbol(variableDefinition);
    }
    searchInLocalScope(symbolName, line = MAX_LINE) {
        let inRangeScope = this.childs.find(scope => scope.inScopeAt(line));
        if (inRangeScope) {
            return inRangeScope.lookup(symbolName, line);
        }
        return null;
    }
    lookupParent(symbolName, line = MAX_LINE) {
        if (this.parentScope) {
            let result = this.parentScope.searchInScope(symbolName, line);
            if (result) {
                return result;
            }
            this.parentScope.lookupParent(symbolName, line);
        }
        return null;
    }
    unwrapSymbol(variableDef) {
        if (variableDef) {
            return variableDef.symbol;
        }
        return null;
    }
    printEntries(level) {
        this.dictionary.forEach(entry => {
            console.log(`${this.tabsGenerator(level)}${entry.toString()}`);
        });
    }
    tabsGenerator(amount) {
        let tabs = '';
        for (let i = 0; i < amount; i++) {
            tabs += '\t';
        }
        return tabs;
    }
}
exports.Scope = Scope;
//# sourceMappingURL=scope.js.map