"use strict";
/**
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var PyQpandaSDK;
(function (PyQpandaSDK) {
    const dictionary = require('../../../../pyQpandaSDK.json');
    function classes() {
        return dictionary.classes;
    }
    PyQpandaSDK.classes = classes;
    function containsClass(className) {
        return classes().some(theClass => theClass.name === className);
    }
    PyQpandaSDK.containsClass = containsClass;
})(PyQpandaSDK = exports.PyQpandaSDK || (exports.PyQpandaSDK = {}));
//# sourceMappingURL=pyQpandaSDK.js.map