interface Addon {
  consoleLog(message: string, logType: string): void;
  fileLog(message: string, logType: string, path: string): void;
}

const addon: Addon = require('../../native');

/** Console class has static methods to log data into stdout. */
class Console {
  /** info is a static method to logging data into stdout as basic information. */
  public static info(message: string): void {
    addon.consoleLog(message, 'info');
  }
  /** error is a static method to logging data into stdout as error. */
  public static error(message: string): void {
    addon.consoleLog(message, 'error');
  }
  /** success is a static method to logging data into stdout as success information. */
  public static success(message: string): void {
    addon.consoleLog(message, 'success');
  }
  /** warn is a static method to logging data into stdout as warning. */
  public static warn(message: string): void {
    addon.consoleLog(message, 'warn');
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
    addon.fileLog(message, 'info', this.path);
  }
  /** error is a method to logging data into file as error. */
  public error(message: string): void {
    addon.fileLog(message, 'error', this.path);
  }
  /** success is a method to logging data into file as success information. */
  public success(message: string): void {
    addon.fileLog(message, 'success', this.path);
  }
  /** warn is a method to logging data into file as warning. */
  public warn(message: string): void {
    addon.fileLog(message, 'warn', this.path);
  }
}

const snowySimpleLogger = {
  Console: Console,
  File: File
};

export default snowySimpleLogger;