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

Generated files targeted to ESNext as commonjs:

```js
require('snowy_simple_logger').default;
```

or

```js
require('snowy_simple_logger/js').default;
```

Original TypeScript lib file:

```ts
import snowySimpleLogger from 'snowy_simple_logger/ts';
```

## Special cases

When you pass to the `snowySimpleLogger.File(path: string)` constructor empty string, library will use as path to the log file `"log.log"` next to interpreted JavaScript/TypeScript file.

When you pass to the `snowySimpleLogger.setPath` setter empty string, library will use as path to the log file `"log.log"` next to interpreted JavaScript/TypeScript file.