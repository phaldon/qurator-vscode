"use strict";
/**
 * This TS file provides  ChildProcess Command Executor
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commandExecutor_1 = require("../commandExecutor");
const Q = require("q");
const PIP_COMMAND = 'pip';
// Install pyqpanda、antlr4-python3-runtime
class ChildProcessCommandExecutor {
    exec(command, args, parser) {
        return commandExecutor_1.CommandExecutor.exec(PIP_COMMAND, [command].concat(args))
            .then(stdout => {
            return Q.resolve(parser(stdout));
        })
            .catch(err => {
            return Q.reject(err);
        });
    }
}
exports.ChildProcessCommandExecutor = ChildProcessCommandExecutor;
//# sourceMappingURL=pipCommandExecutor.js.map