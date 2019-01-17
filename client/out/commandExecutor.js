"use strict";
/**
 * This TS file provides exec utils.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Q = require("q");
const vscode = require("vscode");
const nodeChildProcess = require("child_process");
const utils_1 = require("./utils");
const logger_1 = require("./logger");
var CommandExecutor;
(function (CommandExecutor) {
    // Run Script code 
    const iconv = require('iconv-lite');
    function exec(command, args = []) {
        let outcome = Q.defer();
        nodeChildProcess.exec(command + ' ' + args.join(' '), { encoding: 'buffer' }, (error, stdout, stderr) => {
            if (error) {
                // Dirty trick, read below.
                let errorString = iconv.decode(stdout, 'cp936') + iconv.decode(stderr, 'cp936');
                vscode.window.showErrorMessage(errorString);
                // console.log(errorString)
                outcome.reject(errorString);
            }
            else {
                let outputString = iconv.decode(stdout, 'cp936');
                // vscode.window.showInformationMessage(outputString)
                // console.log(outputString)
                outcome.resolve(outputString);
            }
        });
        return outcome.promise;
    }
    CommandExecutor.exec = exec;
    //Run Script File
    function execFile(command, args = []) {
        let outcome = Q.defer();
        nodeChildProcess.execFile(command, { cwd: args.join(' ') }, (error, stdout, stderr) => {
            if (error) {
                let errorString = stdout + stderr;
                outcome.reject(errorString);
            }
            else {
                let outputString = stdout;
                outcome.resolve(outputString);
            }
        });
        return outcome.promise;
    }
    CommandExecutor.execFile = execFile;
    function execPythonActiveEditor() {
        return Q.Promise((resolve, reject) => {
            vscode.window.showInformationMessage('⚡ Running... ⚡');
            const codeFile = vscode.window.activeTextEditor.document;
            codeFile.save();
            CommandExecutor.exec('python', [codeFile.fileName.toString()])
                .then(stdout => {
                return resolve(stdout);
            })
                .catch(err => {
                logger_1.QLogger.error(err, this);
                vscode.window.showErrorMessage(err);
                return reject(err);
            });
        });
    }
    CommandExecutor.execPythonActiveEditor = execPythonActiveEditor;
    function execQrunesActiveEditorTwo(scriptPath) {
        const scriptsPath = utils_1.Util.getOSDependentPath('../../client/resources/qrunesScripts');
        return Q.Promise((resolve, reject) => {
            const execPath = utils_1.Util.getOSDependentPath(scriptPath);
            vscode.window.showInformationMessage('⚡ Running... ⚡');
            const codeFile = vscode.window.activeTextEditor.document;
            const path = require("path");
            codeFile.save();
            vscode.workspace.openTextDocument(execPath).then(document => {
                CommandExecutor.exec('python', [document.fileName.toString(), '--file', codeFile.fileName.toString()])
                    .then(stdout => {
                    const data = stdout.split('\n');
                    const languageType = data[0].replace(/^\s+/, '').replace(/\s+$/, '');
                    const isOnlyCompile = data[1].replace(/^\s+/, '').replace(/\s+$/, '');
                    if ('Python' == languageType && isOnlyCompile == 'False') {
                        const file_path = codeFile.fileName.toString();
                        const generate_file_path = "\\" + path.basename(path.basename(file_path), path.extname(path.basename(file_path))) + "_python";
                        CommandExecutor.exec('python', [path.dirname(file_path) + generate_file_path + '\\script.py'])
                            .then(stdout => {
                            vscode.window.showInformationMessage('👌  Run Successfully');
                            return resolve(stdout);
                        })
                            .catch(err => {
                            logger_1.QLogger.error(err, this);
                            vscode.window.showErrorMessage(err);
                            return reject(err);
                        });
                    }
                    else if ('C++' == languageType && isOnlyCompile == 'False') {
                        CommandExecutor.execFile('sh.bat', [scriptsPath])
                            .then(() => {
                            CommandExecutor.execFile('a.exe', [scriptsPath])
                                .then(stdout => {
                                vscode.window.showInformationMessage('👌  Run Successfully');
                                return resolve(stdout);
                            });
                        })
                            .catch(err => {
                            logger_1.QLogger.error(err, this);
                            vscode.window.showErrorMessage(err);
                            return reject(err);
                        });
                    }
                    else if (isOnlyCompile == 'True') {
                        vscode.window.showInformationMessage('👌  Compile Successfully');
                    }
                })
                    .catch(err => {
                    logger_1.QLogger.error(err, this);
                    vscode.window.showErrorMessage(err);
                    return reject(err);
                });
            });
        });
    }
    CommandExecutor.execQrunesActiveEditorTwo = execQrunesActiveEditorTwo;
    function execQrunesQrunesActiveEditor(scriptPath) {
        return Q.Promise((resolve, reject) => {
            const execPath = utils_1.Util.getOSDependentPath(scriptPath);
            vscode.window.showInformationMessage('⚡ Running... ⚡');
            const codeFile = vscode.window.activeTextEditor.document;
            codeFile.save();
            vscode.workspace.openTextDocument(execPath).then(document => {
                CommandExecutor.exec('python', [document.fileName.toString(), '--file', codeFile.fileName.toString()])
                    .then(stdout => {
                    //console.log(stdout);
                    return resolve(stdout);
                })
                    .catch(err => {
                    logger_1.QLogger.error(err, this);
                    vscode.window.showErrorMessage(err);
                    return reject(err);
                });
            });
        });
    }
    CommandExecutor.execQrunesQrunesActiveEditor = execQrunesQrunesActiveEditor;
    function execPythonFile(scriptPath, options) {
        return Q.Promise((resolve, reject) => {
            vscode.window.showInformationMessage('⚡ Running... ⚡');
            const execPath = utils_1.Util.getOSDependentPath(scriptPath);
            vscode.workspace.openTextDocument(execPath).then(document => {
                CommandExecutor.exec('python', [document.fileName.toString()].concat(options))
                    .then(stdout => {
                    return resolve(stdout);
                })
                    .catch(err => {
                    logger_1.QLogger.error(err, this);
                    vscode.window.showErrorMessage(err);
                    return reject(err);
                });
            });
        });
    }
    CommandExecutor.execPythonFile = execPythonFile;
})(CommandExecutor = exports.CommandExecutor || (exports.CommandExecutor = {}));
//# sourceMappingURL=commandExecutor.js.map