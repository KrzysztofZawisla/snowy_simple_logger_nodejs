declare class Console {
    static info(message: string): void;
    static error(message: string): void;
    static success(message: string): void;
    static warn(message: string): void;
}
declare class File {
    path: string;
    constructor(path: string);
    info(message: string): void;
    error(message: string): void;
    success(message: string): void;
    warn(message: string): void;
}
declare const snowySimpleLogger: {
    Console: typeof Console;
    File: typeof File;
};
export default snowySimpleLogger;
