/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const scope_1 = require("./scope");
class MultiScopeSymbolTable {
    constructor(rootScope) {
        this.rootScope = rootScope;
        this.currentScope = rootScope;
        this.currentScopes = [];
    }
    lookup(symbolName, line) {
        return this.currentScope.lookup(symbolName, line);
    }
    lookupList(scope, symbolName, line) {
        let scopeFin = this.getScope(this.currentScopes, scope.startLine);
        if (scopeFin !== null) {
            return scopeFin.lookupList(symbolName, line);
        }
        return null;
    }
    lookupToRoot(scope, symbolName, line) {
        let scopeFin = this.getScope(this.currentScopes, scope.startLine);
        if (scopeFin !== null) {
            return scopeFin.lookup(symbolName, line);
        }
        return null;
    }
    define(symbol, declarationLine) {
        this.currentScope.define(symbol, declarationLine);
    }
    defineList(scope, symbol, declarationLine) {
        if (scope == null) {
            this.currentScope.define(symbol, declarationLine);
        }
        else {
            if (this.currentScopes != null) {
                let scopeFin = this.getScope(this.currentScopes, scope.startLine);
                if (scopeFin !== null) {
                    scopeFin.define(symbol, declarationLine);
                }
            }
        }
    }
    push(scopeName, startLine, endLine) {
        let localScope = new scope_1.Scope(this.currentScope, scopeName, startLine, endLine);
        this.currentScope.childs.push(localScope);
        this.currentScope = localScope;
    }
    pushList(scope) {
        this.currentScopes.push(scope);
    }
    update(endLine) {
        this.currentScope.endLine = endLine;
    }
    pop(line) {
        this.currentScope.closeScopeAt(line);
        this.currentScope = this.currentScope.parentScope;
    }
    currentSymbols() {
        return this.currentScope.definedSymbols();
    }
    mergeWith(scope) {
        scope.definedSymbols().forEach(symbol => this.define(symbol, 0));
    }
    print() {
        console.log('Printing symbol table >>>>>>>>');
        this.rootScope.print();
        console.log('<<<<<<<<<<<<<<<<');
    }
    getScope(scopes, startLine) {
        let map = new Map();
        if (scopes.length > 0) {
            for (let sc of scopes) {
                if (sc.startLine <= startLine && sc.endLine >= startLine) {
                    map.set(sc.startLine, sc);
                }
            }
        }
        let num = 0;
        if (map.size > 0) {
            for (let s of map.keys()) {
                if (s > num) {
                    num = s;
                }
            }
            return map.get(num);
        }
        return null;
    }
}
exports.MultiScopeSymbolTable = MultiScopeSymbolTable;
//# sourceMappingURL=multiScopeSymbolTable.js.map