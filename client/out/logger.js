/**
 * This TS file provides Log configuration
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
var QLogger;
(function (QLogger) {
    const { printf } = winston.format;
    const logFormat = printf(event => `${event.level} - ${event.label}: ${event.message}`);
    const fileTransport = new winston.transports.File({
        filename: 'qurator-vscode-log.out',
        maxsize: 1000000,
        maxFiles: 1,
        tailable: true
    });
    const logger = winston.createLogger({
        level: 'silly',
        format: logFormat,
        transports: [new winston.transports.Console(), fileTransport]
    });
    function error(message, reference) {
        logger.error(message, meta(reference));
    }
    QLogger.error = error;
    function info(message, reference) {
        logger.info(message, meta(reference));
    }
    QLogger.info = info;
    function verbose(message, reference) {
        logger.verbose(message, meta(reference));
    }
    QLogger.verbose = verbose;
    function debug(message, reference) {
        logger.debug(message, meta(reference));
    }
    QLogger.debug = debug;
    function meta(reference) {
        let label = reference ? reference.constructor.name : 'unknown';
        return { label };
    }
})(QLogger = exports.QLogger || (exports.QLogger = {}));
//# sourceMappingURL=logger.js.map