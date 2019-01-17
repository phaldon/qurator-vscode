"use strict";
/**
 * This TS file provides General method
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Version {
    constructor(major, minor, maintenance) {
        this.info = { major: -1, minor: -1, maintenance: -1 };
        this.info = { major, minor, maintenance };
    }
    static fromString(versionString) {
        const majorKey = 0;
        const minorKey = 1;
        const maintenanceKey = 2;
        let versionStrings = versionString.split('.') || versionString;
        let major = -1;
        let minor = -1;
        let maintenance = -1;
        if (versionStrings[majorKey] !== null) {
            major = Number(versionStrings[majorKey]);
        }
        if (versionStrings[minorKey] !== null) {
            minor = Number(versionStrings[minorKey]);
        }
        if (versionStrings[maintenanceKey] !== null) {
            maintenance = Number(versionStrings[maintenanceKey]);
        }
        return new Version(major, minor, maintenance);
    }
    toString() {
        let version = 'Invalid version';
        if (this.info.major > -1) {
            version = this.info.major.toString();
        }
        if (this.info.minor > -1) {
            version = version.concat('.' + this.info.minor.toString());
        }
        if (this.info.maintenance > -1) {
            version = version.concat('.' + this.info.maintenance.toString());
        }
        return version;
    }
    isEqual(version) {
        if (version.info.major === this.info.major &&
            version.info.minor === this.info.minor &&
            version.info.maintenance === this.info.maintenance) {
            return true;
        }
        else {
            return false;
        }
    }
    isGreater(version) {
        if (version.info.major < this.info.major) {
            return true;
        }
        else if (version.info.major === this.info.major) {
            if (version.info.minor < this.info.minor) {
                return true;
            }
            else if (version.info.minor === this.info.minor) {
                if (version.info.maintenance < this.info.maintenance) {
                    return true;
                }
            }
        }
        return false;
    }
    isLesser(version) {
        if (version.info.major > this.info.major) {
            return true;
        }
        else if (version.info.major === this.info.major) {
            if (version.info.minor > this.info.minor) {
                return true;
            }
            else if (version.info.minor === this.info.minor) {
                if (version.info.maintenance > this.info.maintenance) {
                    return true;
                }
            }
        }
        return false;
    }
    isPythonVersion(version) {
        if (version.info.major === this.info.major
            && version.info.minor === this.info.minor) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Version = Version;
//# sourceMappingURL=version.js.map