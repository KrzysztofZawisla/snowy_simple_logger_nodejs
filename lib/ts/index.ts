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

/** Console class has static methods to log data into stdout */
class Console {
  /** info is a static method which logging data into stdout */
  public static info(message: string) {
    addon.consoleInfo(message);
  }
  /** error is a static method which logging data into stdout */
  public static error(message: string) {
    addon.consoleError(message);
  }
  /** success is a static method which logging data into stdout*/
  public static success(message: string) {
    addon.consoleSuccess(message);
  }
  /** warn is a static method which logging data into stdout*/
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