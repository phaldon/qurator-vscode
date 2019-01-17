/**
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var TreePrinter;
(function (TreePrinter) {
    function print(ruleNames, root) {
        console.log(`START : ${ruleNames[root.ruleIndex]} > `);
        printChildren(ruleNames, root.children, 1);
    }
    TreePrinter.print = print;
    function printChildren(ruleNames, children, level) {
        children.forEach(child => {
            let spaces = '';
            let spacePosition = 0;
            while (spacePosition < level) {
                spaces += '|  ';
                spacePosition++;
            }
            if (ruleNames[child.ruleIndex] === undefined) {
                console.log(`${spaces}${child.text}`);
            }
            else {
                console.log(`${spaces}${ruleNames[child.ruleIndex]} > `);
            }
            if (child.childCount > 0) {
                printChildren(ruleNames, child.children, level + 1);
            }
        });
    }
})(TreePrinter = exports.TreePrinter || (exports.TreePrinter = {}));
//# sourceMappingURL=treePrinter.js.map