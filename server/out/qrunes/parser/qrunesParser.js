/**
 * This ts file provides the qrunes language parser function.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const qrunesScanner_1 = require("./qrunesScanner");
const arrays_1 = require("../../tools/arrays");
const qrunesLanguageTypes_1 = require("../qrunesLanguageTypes");
class Node {
    constructor(start, end, children, parent) {
        this.start = start;
        this.end = end;
        this.children = children;
        this.parent = parent;
        this.closed = false;
    }
    isSameTag(tagInLowerCase) {
        return this.tag && tagInLowerCase && this.tag.length === tagInLowerCase.length && this.tag.toLowerCase() === tagInLowerCase;
    }
    get firstChild() { return this.children[0]; }
    get lastChild() { return this.children.length ? this.children[this.children.length - 1] : void 0; }
    findNodeBefore(offset) {
        let idx = arrays_1.findFirst(this.children, c => offset <= c.start) - 1;
        if (idx >= 0) {
            let child = this.children[idx];
            if (offset > child.start) {
                if (offset < child.end) {
                    return child.findNodeBefore(offset);
                }
                let lastChild = child.lastChild;
                if (lastChild && lastChild.end === child.end) {
                    return child.findNodeBefore(offset);
                }
                return child;
            }
        }
        return this;
    }
    findNodeAt(offset) {
        let idx = arrays_1.findFirst(this.children, c => offset <= c.start) - 1;
        if (idx >= 0) {
            let child = this.children[idx];
            if (offset > child.start && offset <= child.end) {
                return child.findNodeAt(offset);
            }
        }
        return this;
    }
}
exports.Node = Node;
function parse(text) {
    let scanner = qrunesScanner_1.createScanner(text);
    let qrunesDocument = new Node(0, text.length, [], void 0);
    let curr = qrunesDocument;
    let token = scanner.scan();
    while (token !== qrunesLanguageTypes_1.TokenType.EOS) {
        switch (token) {
            case qrunesLanguageTypes_1.TokenType.StartTagOpen:
                let child = new Node(scanner.getTokenOffset(), text.length, [], curr);
                curr.children.push(child);
                curr = child;
                break;
            case qrunesLanguageTypes_1.TokenType.StartTag:
                curr.tag = scanner.getTokenText();
                break;
            case qrunesLanguageTypes_1.TokenType.StartTagClose:
                curr.end = scanner.getTokenEnd(); // might be later set to end tag position
                if (curr.tag) {
                    curr.closed = true;
                    curr = curr.parent;
                }
                break;
        }
        token = scanner.scan();
    }
    while (curr.parent) {
        curr.end = text.length;
        curr.closed = false;
        curr = curr.parent;
    }
    return {
        roots: qrunesDocument.children,
        findNodeBefore: qrunesDocument.findNodeBefore.bind(qrunesDocument),
        findNodeAt: qrunesDocument.findNodeAt.bind(qrunesDocument)
    };
}
exports.parse = parse;
//# sourceMappingURL=qrunesParser.js.map