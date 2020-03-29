interface Addon {
  consoleInfo(message: string): void;
  consoleError(message: string): void;
  consoleSuccess(message: string): void
  consoleWarn(message: string): void;
  fileInfo(message: string, path: string): void;
  fileError(message: string, path: string): void;
  fileSuccess(message: string, path: string): void;
  fileWarn(message: string, path: string): void;
}

const addon: Addon = require('../../native');

class Console {
  public static info(message: string) {
    addon.consoleInfo(message);
  }
  public static error(message: string) {
    addon.consoleError(message);
  }
  public static success(message: string) {
    addon.consoleSuccess(message);
  }
  public static warn(message: string) {
    addon.consoleWarn(message);
  }
}

class File {
  public path: string;
  constructor(path: string) {
    this.path = path;
  }
  public info(message: string) {
    addon.fileInfo(message, this.path);
  }
  public error(message: string) {
    addon.fileError(message, this.path);
  }
  public success(message: string) {
    addon.fileSuccess(message, this.path);
  }
  public warn(message: string) {
    addon.fileWarn(message, this.path);
  }
}

const snowySimpleLogger = {
  Console: Console,
  File: File
};

export default snowySimpleLogger;