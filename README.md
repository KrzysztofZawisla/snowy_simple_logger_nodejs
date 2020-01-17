# Snowy Simple Logger

Object oriented library created in Rust to logging data into stdout and files.

## Project structure

```txt
snowy_simple_logger
  | Console
    | success(message: string) // static
    | error(message: string) // static
    | warn(message: string) // static
    | info(message: string) // static
  | File(log_file_full_name: string) // constructor
    | path // points to the log_file_full_name parameter in the constructor
    | success(message: string)
    | error(message: string)
    | warn(message: string)
    | info(message: string)
```
