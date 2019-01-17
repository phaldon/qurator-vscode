"use strict";
/**
 * This ts file provides the details of qrunes language tags
 */
Object.defineProperty(exports, "__esModule", { value: true });
const nls = require("vscode-nls");
let localize = nls.loadMessageBundle();
class QRunesTagSpecification {
    constructor(label) {
        this.label = label;
    }
}
exports.QRunesTagSpecification = QRunesTagSpecification;
exports.QRUNES_TAGS = {
    settings: new QRunesTagSpecification(localize('tags.settings', 'The settings element represents the configurations of QRunes\(Quantum Programming Language\).')),
    qcodes: new QRunesTagSpecification(localize('tags.qcodes', 'The qcodes element represents the quantum code for QRunes\(Quantum Programming Language\).')),
    script: new QRunesTagSpecification(localize('tags.script', 'The script element represents the classic programming languanges like Python, C++, etc.'))
};
function getQRunesTagProvider() {
    return {
        getId: () => 'qrunes',
        isApplicable: () => true,
        collectTags: (collector) => collectTagsDefault(collector, exports.QRUNES_TAGS)
    };
}
exports.getQRunesTagProvider = getQRunesTagProvider;
function collectTagsDefault(collector, tagSet) {
    for (var tag in tagSet) {
        collector(tag, tagSet[tag].label);
    }
}
//# sourceMappingURL=qrunesTags.js.map