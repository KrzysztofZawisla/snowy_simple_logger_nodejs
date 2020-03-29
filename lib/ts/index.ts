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

/** Console class has static methods to log data into stdout. */
class Console {
  /** info is a static method to logging data into stdout as basic information. */
  public static info(message: string): void {
    addon.consoleInfo(message);
  }
  /** error is a static method to logging data into stdout as error. */
  public static error(message: string): void {
    addon.consoleError(message);
  }
  /** success is a static method to logging data into stdout as success information. */
  public static success(message: string): void {
    addon.consoleSuccess(message);
  }
  /** warn is a static method to logging data into stdout as warning. */
  public static warn(message: string): void {
    addon.consoleWarn(message);
  }
}

/** File is constructible class which allows to log data into file. */
class File {
  /** Path to log file */
  public path: string;
  constructor(path: string) {
    this.path = path;
  }
  /** info is a method to logging data into file as information. */
  public info(message: string): void {
    addon.fileInfo(message, this.path);
  }
  /** error is a method to logging data into file as error. */
  public error(message: string): void {
    addon.fileError(message, this.path);
  }
  /** success is a method to logging data into file as success information. */
  public success(message: string): void {
    addon.fileSuccess(message, this.path);
  }
  /** warn is a method to logging data into file as warning. */
  public warn(message: string): void {
    addon.fileWarn(message, this.path);
  }
}

const snowySimpleLogger = {
  Console: Console,
  File: File
};

export default snowySimpleLogger;