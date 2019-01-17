"use strict";
/**
 * This TS file provides read and download packages
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../logger");
const vscode = require("vscode");
const activationUtils_1 = require("../activationUtils");
class PackageManager {
    constructor(pipExecutor, pypiExecutor) {
        this.pipExecutor = pipExecutor;
        this.pypiExecutor = pypiExecutor;
    }
    async verifyAndApply(packages, notInstalledCallback, oldVersionCallback) {
        packages.forEach(pkg => {
            logger_1.QLogger.debug(`Checking package ${pkg.name} ${pkg.version} installation`, this);
            this.verifyInstallation(pkg, notInstalledCallback, oldVersionCallback);
        });
    }
    async verifyInstallation(packageInfo, notInstalledCallback, oldVersionCallback) {
        try {
            const systemPackageInfo = await this.pipExecutor.getPackageInfo(packageInfo.name);
            const needsMandatoryUpdate = systemPackageInfo.version.isLesser(packageInfo.version);
            if (needsMandatoryUpdate) {
                logger_1.QLogger.verbose(`Starting mandatory update process for ${packageInfo.name} ...`, this);
                const updateAccepted = await this.offerUpdate(packageInfo, packageInfo.version, needsMandatoryUpdate);
                if (updateAccepted) {
                    const updated = await this.update(packageInfo.name);
                    if (updated) {
                        logger_1.QLogger.error(`Package ${packageInfo} updated`, this);
                        oldVersionCallback(packageInfo);
                    }
                    else {
                        logger_1.QLogger.error(`Package ${packageInfo} do not updated`, this);
                        oldVersionCallback(packageInfo);
                    }
                }
                else {
                    logger_1.QLogger.info(`Package ${packageInfo} do not updated. The user rejected the update`, this);
                    oldVersionCallback(packageInfo);
                }
            }
            else {
                logger_1.QLogger.verbose(`Starting non-mandatory update process for ${packageInfo.name} ...`, this);
                const pypiPackageInfo = await this.pypiExecutor.getPackageInfo(packageInfo.name);
                const availableUpdate = await pypiPackageInfo.version.isGreater(systemPackageInfo.version);
                if (availableUpdate) {
                    logger_1.QLogger.verbose(`Starting update process for ${packageInfo.name} ...`, this);
                    const updateAccepted = await this.offerUpdate(packageInfo, pypiPackageInfo.version, needsMandatoryUpdate);
                    if (updateAccepted) {
                        const updated = await this.update(packageInfo.name);
                        if (updated) {
                            logger_1.QLogger.info(`Package ${packageInfo} updated`, this);
                            vscode.window.showInformationMessage(`${packageInfo.name} updated! 🎉🎉🎉`);
                            oldVersionCallback(packageInfo);
                        }
                        else {
                            logger_1.QLogger.error(`Package ${packageInfo} do not updated`, this);
                            oldVersionCallback(packageInfo);
                        }
                    }
                    else {
                        logger_1.QLogger.info(`Package ${packageInfo} do not updated. The user rejected the update`, this);
                        oldVersionCallback(packageInfo);
                    }
                }
                else {
                    logger_1.QLogger.verbose(`${packageInfo.name} is already installed`, this);
                    activationUtils_1.ActivationUtils.showExtensionBootInfo(`👌 ${packageInfo.name} is already installed`, false);
                    return oldVersionCallback(packageInfo);
                }
            }
        }
        catch (err) {
            logger_1.QLogger.verbose(`Starting installation process for ${packageInfo.name} ...`, this);
            const installAccepted = await this.offerInstall(packageInfo);
            if (installAccepted) {
                const installed = await this.install(packageInfo.name);
                if (installed) {
                    logger_1.QLogger.info(`Package ${packageInfo} installed`, this);
                    vscode.window.showInformationMessage(`${packageInfo.name} installed! 🎉🎉🎉`);
                    notInstalledCallback(packageInfo);
                }
                else {
                    logger_1.QLogger.error(`Package ${packageInfo} do not installed`, this);
                    notInstalledCallback(packageInfo);
                }
            }
            else {
                logger_1.QLogger.info(`Package ${packageInfo} do not updated. The user rejected the update`, this);
                notInstalledCallback(packageInfo);
            }
        }
    }
    async offerUpdate(packageInfo, offerVersion, mandatory) {
        let updateMsg = `There is a new ${packageInfo.name} release (v${offerVersion})! Update ${packageInfo.name} now?`;
        if (mandatory) {
            updateMsg = `The ${packageInfo.name} version you have installed is older than the version required (v${offerVersion}). Update ${packageInfo.name} now?`;
        }
        const selection = await vscode.window.showInformationMessage(updateMsg, 'Ok', 'Dismiss');
        if (selection === 'Ok') {
            logger_1.QLogger.verbose(`Clicked on OK!`, this);
            return true;
        }
        else if (selection === 'Dismiss') {
            logger_1.QLogger.verbose(`Clicked on Dismiss!`, this);
            return false;
        }
        else {
            logger_1.QLogger.verbose(`Clicked on other element! Updating anyway...`, this);
            return false;
        }
    }
    async update(packageName) {
        try {
            vscode.window.showInformationMessage(`Updating ${packageName}... (this may take some time, be patient 🙏)`);
            const updated = await this.pipExecutor.update(packageName);
            if (updated) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            logger_1.QLogger.error(`ERROR: Couldn't upgrade ${packageName}. ${error}`, this);
            vscode.window.showErrorMessage(`ERROR: Couldn't upgrade ${packageName}. ${error}`);
            return false;
        }
    }
    async offerInstall(packageInfo) {
        let installMsg = `You must install ${packageInfo.name} to take advantage of this extension. Do you want to install it now?`;
        const selection = await vscode.window.showInformationMessage(installMsg, 'Ok', 'Dismiss');
        if (selection === 'Ok') {
            logger_1.QLogger.verbose(`Clicked on OK!`, this);
            return true;
        }
        else if (selection === 'Dismiss') {
            logger_1.QLogger.verbose(`Clicked on Dismiss!`, this);
            return false;
        }
        else {
            logger_1.QLogger.verbose(`Clicked on other element! Updating anyway`, this);
            return false;
        }
    }
    async install(packageName) {
        try {
            vscode.window.showInformationMessage(`Installing ${packageName}... (this may take some time, be patient 🙏)`);
            const installed = await this.pipExecutor.install(packageName);
            if (installed) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            logger_1.QLogger.error(`ERROR: Couldn't install ${packageName}. ${error}`, this);
            vscode.window.showErrorMessage(`ERROR: Couldn't install ${packageName}. ${error}`);
            return false;
        }
    }
}
exports.PackageManager = PackageManager;
//# sourceMappingURL=packageManager.js.map