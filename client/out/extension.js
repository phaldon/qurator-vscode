/**
 * This TS file provides vscode Entrance
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode_1 = require("vscode");
const activationUtils_1 = require("./activationUtils");
const logger_1 = require("./logger");
const vscode_languageclient_1 = require("vscode-languageclient");
let client;
function activate(context) {
    activationUtils_1.ActivationUtils.setTheme();
    // The server is implemented in node
    let serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
    // The debug options for the server
    // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
    let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    let serverOptions = {
        run: { module: serverModule, transport: vscode_languageclient_1.TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: vscode_languageclient_1.TransportKind.ipc,
            options: debugOptions
        }
    };
    let embeddedLanguages = { settings: true, qcodes: true, pyscript: true, cppscript: true };
    // Options to control the language client
    let clientOptions = {
        // Register the server for plain text documents
        documentSelector: [{ scheme: 'file', language: 'qrunes' }],
        synchronize: {
            configurationSection: ['qrunes', 'settings', 'qcodes', 'pyscript', 'cppscript'],
            // Notify the server about file changes to '.clientrc files contained in the workspace
            fileEvents: vscode_1.workspace.createFileSystemWatcher('**/.clientrc')
        },
        initializationOptions: {
            embeddedLanguages
        }
    };
    // Create the language client and start the client.
    client = new vscode_languageclient_1.LanguageClient('qrunes', 'QRunes Project', serverOptions, clientOptions);
    // Start the client. This will also launch the server
    client.start();
    activationUtils_1.ActivationUtils.showExtensionBootInfo('✨ Activating qurator-vscode extension... ✨', false);
    activationUtils_1.ActivationUtils.registerCommands(context);
    activationUtils_1.ActivationUtils.checkDependencies(false)
        .then(() => {
        logger_1.QLogger.verbose('qurator-vscode extension successfully loaded!', this);
        activationUtils_1.ActivationUtils.showExtensionBootInfo('🚀 qurator-vscode extension loaded! 🚀', false);
    })
        .catch(err => {
        logger_1.QLogger.error(`Dependencies error: ${err}`, this);
        vscode_1.window.showErrorMessage(err);
    });
}
exports.activate = activate;
function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map