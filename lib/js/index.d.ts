/** Console class has static methods to log data into stdout. */
declare class Console {
    /** info is a static method to logging data into stdout as basic information. */
    static info(message: string): void;
    /** error is a static method to logging data into stdout as error. */
    static error(message: string): void;
    /** success is a static method to logging data into stdout as success information. */
    static success(message: string): void;
    /** warn is a static method to logging data into stdout as warning. */
    static warn(message: string): void;
}
/** File is constructible class which allows to log data into file. */
declare class File {
    /** Path to log file */
    private path;
    constructor(path: string);
    /** Setter for the path to log file */
    set setPath(path: string);
    /** Getter for the path to log file */
    get getPath(): string;
    /** info is a method to logging data into file as information. */
    info(message: string): void;
    /** error is a method to logging data into file as error. */
    error(message: string): void;
    /** success is a method to logging data into file as success information. */
    success(message: string): void;
    /** warn is a method to logging data into file as warning. */
    warn(message: string): void;
}
declare const snowySimpleLogger: {
    Console: typeof Console;
    File: typeof File;
};
export default snowySimpleLogger;
