"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addon = require('../../native');
/** Console class has static methods to log data into stdout. */
class Console {
    /** info is a static method to logging data into stdout as basic information. */
    static info(message) {
        addon.consoleInfo(message);
    }
    /** error is a static method to logging data into stdout as error. */
    static error(message) {
        addon.consoleError(message);
    }
    /** success is a static method to logging data into stdout as success information. */
    static success(message) {
        addon.consoleSuccess(message);
    }
    /** warn is a static method to logging data into stdout as warning. */
    static warn(message) {
        addon.consoleWarn(message);
    }
}
/** File is constructible class which allows to log data into file. */
class File {
    constructor(path) {
        this.path = path;
    }
    /** info is a method to logging data into file as information. */
    info(message) {
        addon.fileInfo(message, this.path);
    }
    /** error is a method to logging data into file as error. */
    error(message) {
        addon.fileError(message, this.path);
    }
    /** success is a method to logging data into file as success information. */
    success(message) {
        addon.fileSuccess(message, this.path);
    }
    /** warn is a method to logging data into file as warning. */
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