"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addon = require('../../native');
class Console {
    static info(message) {
        addon.consoleInfo(message);
    }
    static error(message) {
        addon.consoleError(message);
    }
    static success(message) {
        addon.consoleSuccess(message);
    }
    static warn(message) {
        addon.consoleWarn(message);
    }
}
class File {
    constructor(path) {
        this.path = path;
    }
    info(message) {
        addon.fileInfo(message, this.path);
    }
    error(message) {
        addon.fileError(message, this.path);
    }
    success(message) {
        addon.fileSuccess(message, this.path);
    }
    warn(message) {
        addon.fileWarn(message, this.path);
    }
}
const snowySimpleLogger = {
    Console: Console,
    File: File
};
exports.default = snowySimpleLogger;
//# sourceMappingURL=index.js.map