# Snowy Simple Logger

Object oriented library created in Rust to logging data into stdout and files.

## Project structure

```txt
snowy_simple_logger
  | Console
    | success(message: string) // staticmethod
    | error(message: string) // staticmethod
    | warn(message: string) // staticmethod
    | info(message: string) // staticmethod
  | File(log_file_full_name: string) // constructor
    | path // points to the log_file_full_name parameter in the constructor
    | success(message: string)
    | error(message: string)
    | warn(message: string)
    | info(message: string)
```