"use strict";
/**
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var PyQpandaSDK;
(function (PyQpandaSDK) {
    const dictionary = require('../../../../pyQpandaSDK.json');
    function classesAndMethods() {
        return dictionary.classes;
    }
    PyQpandaSDK.classesAndMethods = classesAndMethods;
    function containsClassAndMethods(className) {
        return classesAndMethods().some(theClass => theClass.name === className);
    }
    PyQpandaSDK.containsClassAndMethods = containsClassAndMethods;
})(PyQpandaSDK = exports.PyQpandaSDK || (exports.PyQpandaSDK = {}));
//# sourceMappingURL=pyQpandaSDK.js.map