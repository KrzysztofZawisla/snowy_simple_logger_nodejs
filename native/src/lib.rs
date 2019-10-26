extern crate neon;
extern crate chrono;
extern crate colorful;

use neon::prelude::*;
use colorful::Color;
use colorful::Colorful;
use std::fs;
use std::path;

fn console_info(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let now = chrono::Local::now();
    let message = cx.argument::<JsString>(0)?.value();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now+"[info] "+&message;
    println!("{}", output);
    Ok(cx.undefined())
}

fn console_error(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let now = chrono::Local::now();
    let message = cx.argument::<JsString>(0)?.value();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now+"[error] "+&message;
    println!("{}", output.color(Color::Red));
    Ok(cx.undefined())
}

fn console_success(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let now = chrono::Local::now();
    let message = cx.argument::<JsString>(0)?.value();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now+"[success] "+&message;
    println!("{}", output.color(Color::Green));
    Ok(cx.undefined())
}

fn console_warn(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let now = chrono::Local::now();
    let message = cx.argument::<JsString>(0)?.value();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now+"[success] "+&message;
    println!("{}", output.color(Color::Orange1));
    Ok(cx.undefined())
}

fn file_info(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let now = chrono::Local::now();
    let message = cx.argument::<JsString>(0)?.value();
    let path = cx.argument::<JsString>(1)?.value();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now+"[info] "+&message;
    if !path::Path::new(&path).exists() {
        fs::File::create(&path).expect("Cannot create log file");
    }
    let log_file_content = fs::read_to_string(&path).expect("Cannot read log file");
    let mut new_line = "";
    if log_file_content != "" {
        new_line = "\n";
    }
    let log_file_content = log_file_content+new_line+&output;
    fs::write(path, log_file_content).expect("Cannot write to log file");
    Ok(cx.undefined())
}

fn file_success(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let now = chrono::Local::now();
    let message = cx.argument::<JsString>(0)?.value();
    let path = cx.argument::<JsString>(1)?.value();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now+"[success] "+&message;
    if !path::Path::new(&path).exists() {
        fs::File::create(&path).expect("Cannot create log file");
    }
    let log_file_content = fs::read_to_string(&path).expect("Cannot read log file");
    let mut new_line = "";
    if log_file_content != "" {
        new_line = "\n";
    }
    let log_file_content = log_file_content+new_line+&output;
    fs::write(path, log_file_content).expect("Cannot write to log file");
    Ok(cx.undefined())
}

fn file_error(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let now = chrono::Local::now();
    let message = cx.argument::<JsString>(0)?.value();
    let path = cx.argument::<JsString>(1)?.value();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now+"[error] "+&message;
    if !path::Path::new(&path).exists() {
        fs::File::create(&path).expect("Cannot create log file");
    }
    let log_file_content = fs::read_to_string(&path).expect("Cannot read log file");
    let mut new_line = "";
    if log_file_content != "" {
        new_line = "\n";
    }
    let log_file_content = log_file_content+new_line+&output;
    fs::write(path, log_file_content).expect("Cannot write to log file");
    Ok(cx.undefined())
}

fn file_warn(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let now = chrono::Local::now();
    let message = cx.argument::<JsString>(0)?.value();
    let path = cx.argument::<JsString>(1)?.value();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now+"[warn] "+&message;
    if !path::Path::new(&path).exists() {
        fs::File::create(&path).expect("Cannot create log file");
    }
    let log_file_content = fs::read_to_string(&path).expect("Cannot read log file");
    let mut new_line = "";
    if log_file_content != "" {
        new_line = "\n";
    }
    let log_file_content = log_file_content+new_line+&output;
    fs::write(path, log_file_content).expect("Cannot write to log file");
    Ok(cx.undefined())
}

register_module!(mut cx, {
    cx.export_function("consoleInfo", console_info);
    cx.export_function("consoleError", console_error);
    cx.export_function("consoleSuccess", console_success);
    cx.export_function("consoleWarn", console_warn);
    cx.export_function("fileInfo", file_info);
    cx.export_function("fileError", file_error);
    cx.export_function("fileSuccess", file_success);
    cx.export_function("fileWarn", file_warn)
});
