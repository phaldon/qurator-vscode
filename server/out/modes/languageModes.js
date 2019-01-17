/**
 * This ts file provides all modes in qrunes language, include the interface languagemode,
 * setting, language modes, and function get language modes.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const qrunesLanguageService_1 = require("../qrunes/qrunesLanguageService");
const settingsMode_1 = require("./settingsMode");
const qcodesMode_1 = require("./qcodesMode");
const pyScriptMode_1 = require("./pyScriptMode");
const cppScriptMode_1 = require("./cppScriptMode");
const languageModelCache_1 = require("../languageModelCache");
const embeddedSupport_1 = require("./embeddedSupport");
const qrunesMode_1 = require("./qrunesMode");
function getLanguageModes(supportedLanguages) {
    var qrunesLanguageService = qrunesLanguageService_1.getLanguageService();
    // Get document regions, include get, onDocumentRemoved, dispose method. 
    let documentRegions = languageModelCache_1.getLanguageModelCache(10, 60, document => embeddedSupport_1.getDocumentRegions(qrunesLanguageService, document));
    let modelCaches = [];
    modelCaches.push(documentRegions);
    // Get modes, include qrunes, settings, qcodes, pyscript, cppscript.
    let modes = Object.create(null);
    modes['qrunes'] = qrunesMode_1.getQRunesMode(qrunesLanguageService);
    if (supportedLanguages['settings']) {
        modes['settings'] = settingsMode_1.getSettingsMode(documentRegions);
    }
    if (supportedLanguages['qcodes']) {
        modes['qcodes'] = qcodesMode_1.getQcodesMode(documentRegions);
    }
    if (supportedLanguages['pyscript']) {
        modes['pyscript'] = pyScriptMode_1.getPyScriptMode(documentRegions);
    }
    if (supportedLanguages['cppscript']) {
        modes['cppscript'] = cppScriptMode_1.getCppScriptMode(documentRegions);
    }
    return {
        // Get mode base on position.
        getModeAtPosition(document, position) {
            // Get language id, find the mode base on language id.
            let languageId = documentRegions.get(document).getLanguageAtPosition(position);
            if (languageId) {
                return modes[languageId];
            }
            return void 0;
        },
        // Get modes base on range.
        getModesInRange(document, range) {
            return documentRegions.get(document).getLanguageRanges(range).map(r => {
                return {
                    start: r.start,
                    end: r.end,
                    mode: r.languageId && modes[r.languageId]
                };
            });
        },
        // Get all modes in document regions
        getAllModesInDocument(document) {
            let result = [];
            // Get language id, find all modes base on language id.
            for (let languageId of documentRegions.get(document).getLanguagesInDocument()) {
                let mode = modes[languageId];
                if (mode) {
                    result.push(mode);
                }
            }
            return result;
        },
        getAllModes() {
            let result = [];
            for (let languageId in modes) {
                let mode = modes[languageId];
                if (mode) {
                    result.push(mode);
                }
            }
            return result;
        },
        getMode(languageId) {
            return modes[languageId];
        },
        onDocumentRemoved(document) {
            modelCaches.forEach(mc => mc.onDocumentRemoved(document));
            for (let mode in modes) {
                modes[mode].onDocumentRemoved(document);
            }
        },
        dispose() {
            modelCaches.forEach(mc => mc.dispose());
            modelCaches = [];
            for (let mode in modes) {
                modes[mode].dispose();
            }
            modes = {};
        }
    };
}
exports.getLanguageModes = getLanguageModes;
//# sourceMappingURL=languageModes.js.map