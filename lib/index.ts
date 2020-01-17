const addon = require('../native');

class Console {
  static info(message: string) {
    addon.consoleInfo(message);
  }
  static error(message: string) {
    addon.consoleError(message);
  }
  static success(message: string) {
    addon.consoleSuccess(message);
  }
  static warn(message: string) {
    addon.consoleWarn(message);
  }
}

class File {
  public path: string;
  constructor(path: string) {
    this.path = path;
  }
  info(message: string) {
    addon.fileInfo(message, this.path);
  }
  error(message: string) {
    addon.fileError(message, this.path);
  }
  success(message: string) {
    addon.fileSuccess(message, this.path);
  }
  warn(message: string) {
    addon.fileWarn(message, this.path);
  }
}

const snowySimpleLogger = {
  Console: Console,
  File: File
};

module.exports = snowySimpleLogger;

export default snowySimpleLogger;