/**
 * This handler provides the function about the runner, include runSafe and runSafeAsync.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_languageserver_1 = require("vscode-languageserver");
function formatError(message, err) {
    if (err instanceof Error) {
        let error = err;
        return `${message}: ${error.message}\n${error.stack}`;
    }
    else if (typeof err === 'string') {
        return `${message}: ${err}`;
    }
    else if (err) {
        return `${message}: ${err.toString()}`;
    }
    return message;
}
exports.formatError = formatError;
function runSafeAsync(func, errorVal, errorMessage, token) {
    return new Promise((resolve, reject) => {
        console.log(reject);
        setImmediate(() => {
            if (token.isCancellationRequested) {
                resolve(cancelValue());
            }
            return func().then(result => {
                if (token.isCancellationRequested) {
                    resolve(cancelValue());
                    return;
                }
                else {
                    resolve(result);
                }
            }, e => {
                //console.error(formatError(errorMessage, e));
                resolve(errorVal);
            });
        });
    });
}
exports.runSafeAsync = runSafeAsync;
function runSafe(func, errorVal, errorMessage, token) {
    return new Promise((resolve, reject) => {
        console.log(reject);
        setImmediate(() => {
            if (token.isCancellationRequested) {
                resolve(cancelValue());
            }
            else {
                try {
                    let result = func();
                    if (token.isCancellationRequested) {
                        resolve(cancelValue());
                        return;
                    }
                    else {
                        resolve(result);
                    }
                }
                catch (e) {
                    //console.error(formatError(errorMessage, e));
                    resolve(errorVal);
                }
            }
        });
    });
}
exports.runSafe = runSafe;
function cancelValue() {
    return new vscode_languageserver_1.ResponseError(vscode_languageserver_1.ErrorCodes.RequestCancelled, 'Request cancelled');
}
//# sourceMappingURL=runner.js.map