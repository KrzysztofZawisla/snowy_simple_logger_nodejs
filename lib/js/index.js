"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addon = require('../../native');
/** Console class has static methods to log data into stdout. */
class Console {
    /** info is a static method to logging data into stdout as basic information. */
    static info(message) {
        addon.consoleLog(message, 'info');
    }
    /** error is a static method to logging data into stdout as error. */
    static error(message) {
        addon.consoleLog(message, 'error');
    }
    /** success is a static method to logging data into stdout as success information. */
    static success(message) {
        addon.consoleLog(message, 'success');
    }
    /** warn is a static method to logging data into stdout as warning. */
    static warn(message) {
        addon.consoleLog(message, 'warn');
    }
}
/** File is constructible class which allows to log data into file. */
class File {
    constructor(path) {
        this.path = path;
    }
    /** info is a method to logging data into file as information. */
    info(message) {
        addon.fileLog(message, 'info', this.path);
    }
    /** error is a method to logging data into file as error. */
    error(message) {
        addon.fileLog(message, 'error', this.path);
    }
    /** success is a method to logging data into file as success information. */
    success(message) {
        addon.fileLog(message, 'success', this.path);
    }
    /** warn is a method to logging data into file as warning. */
    warn(message) {
        addon.fileLog(message, 'warn', this.path);
    }
}
const snowySimpleLogger = {
    Console: Console,
    File: File
};
exports.default = snowySimpleLogger;
//# sourceMappingURL=index.js.map