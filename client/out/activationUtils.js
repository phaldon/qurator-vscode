"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This TS file provides registerCommands、checkDependencies
 */
const vscode = require("vscode");
const Q = require("q");
const utils_1 = require("./utils");
const dependencyMgr_1 = require("./dependencies/dependencyMgr");
const configuration_1 = require("./configuration");
const commandExecutor_1 = require("./commandExecutor");
const resultProvider_1 = require("./resultProvider");
const visualizations_1 = require("./visualizations");
const logger_1 = require("./logger");
const packageManager_1 = require("./packages/packageManager");
const pipCommandExecutor_1 = require("./pip/pipCommandExecutor");
const pipExecutor_1 = require("./pip/pipExecutor");
const pypiExecutor_1 = require("./pip/pypiExecutor");
var ActivationUtils;
(function (ActivationUtils) {
    function setTheme() {
        return Q.Promise((resolve, reject) => {
            try {
                let config = vscode.workspace.getConfiguration('workbench');
                let theme = config.get('colorTheme');
                let editor = vscode.workspace.getConfiguration('editor');
                let tab = editor.get("insertSpaces");
                if (tab == false) {
                    vscode.workspace
                        .getConfiguration('editor')
                        .update('insertSpaces', true, vscode.ConfigurationTarget.Global);
                }
                if (theme == "Default Dark+") {
                    vscode.workspace
                        .getConfiguration('workbench')
                        .update('colorTheme', "QRunes Dark", vscode.ConfigurationTarget.Global)
                        .then(() => {
                        return resolve(true);
                    });
                }
                else if (theme == "Default Light+") {
                    vscode.workspace
                        .getConfiguration('workbench')
                        .update('colorTheme', "QRunes Light", vscode.ConfigurationTarget.Global)
                        .then(() => {
                        return resolve(true);
                    });
                }
                else {
                    return resolve(false);
                }
            }
            catch (err) {
                return reject('Error modifying the flag for the theme of the extension');
            }
        });
    }
    ActivationUtils.setTheme = setTheme;
    //Register Commands
    function registerCommands(context) {
        const executeQRUNESScript = utils_1.Util.getOSDependentPath('../../client/resources/qrunesScripts/generationFile.py');
        context.subscriptions.push(vscode.commands.registerCommand('qurator-vscode.checkDependencies', () => ActivationUtils.checkDependencies(true)), 
        //Run Python File
        vscode.commands.registerCommand('qurator-vscode.runPythonCode', () => commandExecutor_1.CommandExecutor.execPythonActiveEditor().then(codeResult => {
            let resultProvider = new resultProvider_1.ResultProvider();
            vscode.workspace.registerTextDocumentContentProvider('qrunes-preview-result', resultProvider);
            let previewUri = vscode.Uri.parse(`qrunes-preview-result://authority/result-preview`);
            // const codeFile = vscode.window.activeTextEditor.document;
            // codeFile.save();
            resultProvider.displayContent(visualizations_1.VizManager.createViz(codeResult), previewUri);
            vscode.commands
                .executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.Two, 'Execution result - QRUNES')
                .then(_success => { }, reason => {
                logger_1.QLogger.error(`Error: ${reason}`, this);
                vscode.window.showErrorMessage(reason);
            });
        })), 
        //Run QRUNES File 
        vscode.commands.registerCommand('qurator-vscode.runQRunesCode', () => commandExecutor_1.CommandExecutor.execQrunesActiveEditorTwo(executeQRUNESScript).then(codeResult => {
            let resultProvider = new resultProvider_1.ResultProvider();
            vscode.workspace.registerTextDocumentContentProvider('qruns-preview-result', resultProvider);
            let previewUri = vscode.Uri.parse(`qruns-preview-result://authority/result-preview`);
            // let execPath = Util.getOSDependentPath(executeQRUNESScript);
            resultProvider.displayContent(visualizations_1.VizManager.createViz(codeResult), previewUri);
            vscode.commands
                .executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.Two, 'Execution result - QRUNES')
                .then(_success => { }, reason => {
                logger_1.QLogger.error(`Error: ${reason}`, this);
                vscode.window.showErrorMessage(reason);
            });
        })));
    }
    ActivationUtils.registerCommands = registerCommands;
    function showInfoBubbles(verbose) {
        return Q.Promise((resolve, reject) => {
            try {
                if (verbose === true) {
                    return resolve(true);
                }
                else {
                    return resolve(false);
                }
            }
            catch (err) {
                return reject('Error getting the displayBootInfo flag');
            }
        });
    }
    ActivationUtils.showInfoBubbles = showInfoBubbles;
    function showExtensionBootInfo(message, verbose) {
        showInfoBubbles(verbose).then(result => {
            if (result === true) {
                vscode.window.showInformationMessage(message);
            }
            else {
                logger_1.QLogger.verbose(message, this);
            }
        });
    }
    ActivationUtils.showExtensionBootInfo = showExtensionBootInfo;
    //checkDependencies
    function checkDependencies(verbose) {
        let depMgr = new dependencyMgr_1.DependencyMgr();
        return Q.Promise((resolve, reject) => {
            return depMgr
                .checkDependencies()
                .then(deps => {
                logger_1.QLogger.verbose('Checking for Python dependencies...', this);
                // vscode.window.showInformationMessage("Checking for Python dependencies...");
                let depsList = '';
                deps.forEach(dep => {
                    logger_1.QLogger.verbose(`Package: ${dep.name} Version: ${dep.installedVersion}`, this);
                    depsList += `👌 ${dep.name} v ${dep.installedVersion}\n`;
                });
                showExtensionBootInfo(`Qurator VSCode Extension dependencies found! ${depsList}`, verbose);
                // Check for pyhton packages!
            })
                .then(() => {
                logger_1.QLogger.verbose('Check for required python packages...', this);
                // vscode.window.showInformationMessage("Checking for required python packages...");
                let commandExecutor = new pipCommandExecutor_1.ChildProcessCommandExecutor();
                let pipExecutor = new pipExecutor_1.PipExecutor(commandExecutor);
                let pypiExecutor = new pypiExecutor_1.PyPiExecutor();
                let packageManager = new packageManager_1.PackageManager(pipExecutor, pypiExecutor);
                let notInstalled = (packageInfo) => logger_1.QLogger.info(`Go to install ${packageInfo.name}`, this);
                let oldVersion = (packageInfo) => logger_1.QLogger.info(`Go to update ${packageInfo.name}`, this);
                packageManager.verifyAndApply(configuration_1.qrunesVSCodeConfiguration.requiredPackages(), notInstalled, oldVersion);
                return resolve();
            })
                .catch(error => {
                logger_1.QLogger.error(`Seems like there was a problem: ${error}`, this);
                vscode.window.showErrorMessage(`Seems like there was a problem: ${error}`);
                return reject(error);
            });
        });
    }
    ActivationUtils.checkDependencies = checkDependencies;
})(ActivationUtils = exports.ActivationUtils || (exports.ActivationUtils = {}));
//# sourceMappingURL=activationUtils.js.map