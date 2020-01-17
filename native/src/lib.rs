extern crate neon;
extern crate chrono;
extern crate colorful;

use neon::prelude::*;
use colorful::Color;
use colorful::Colorful;
use std::fs;
use std::path;

fn console_output(message: String, log_type: &str) -> () {
    let now = chrono::Local::now();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now+"["+log_type+"] "+&message;
    if log_type == "info" {
        println!("{}", output.color(Color::Cyan));
    } else if log_type == "error" {
        println!("{}", output.color(Color::Red));
    } else if log_type == "success" {
        println!("{}", output.color(Color::Green));
    } else if log_type == "warn" {
        println!("{}", output.color(Color::Orange1));
    }
}

fn file_output(message: String, log_type: &str, true_path: String) -> () {
    let now = chrono::Local::now();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now+"["+log_type+"] "+&message;
    if !path::Path::new(&true_path).exists() {
        fs::File::create(&true_path).expect("Cannot create log file");
    }
    let log_file_content = fs::read_to_string(&true_path).expect("Cannot read log file");
    let mut new_line = "";
    if log_file_content != "" {
        new_line = "\n";
    }
    let log_file_content = log_file_content+new_line+&output;
    fs::write(true_path, log_file_content).expect("Cannot write to log file");
}

fn console_info(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let message = cx.argument::<JsString>(0)?.value();
    console_output(message, "info");
    Ok(cx.undefined())
}

fn console_error(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let message = cx.argument::<JsString>(0)?.value();
    console_output(message, "error");
    Ok(cx.undefined())
}

fn console_success(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let message = cx.argument::<JsString>(0)?.value();
    console_output(message, "success");
    Ok(cx.undefined())
}

fn console_warn(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let message = cx.argument::<JsString>(0)?.value();
    console_output(message, "warn");
    Ok(cx.undefined())
}

fn file_info(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let message = cx.argument::<JsString>(0)?.value();
    let path = cx.argument::<JsString>(1)?.value();
    file_output(message, "info", path);
    Ok(cx.undefined())
}

fn file_success(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let message = cx.argument::<JsString>(0)?.value();
    let path = cx.argument::<JsString>(1)?.value();
    file_output(message, "success", path);
    Ok(cx.undefined())
}

fn file_error(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let message = cx.argument::<JsString>(0)?.value();
    let path = cx.argument::<JsString>(1)?.value();
    file_output(message, "error", path);
    Ok(cx.undefined())
}

fn file_warn(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let message = cx.argument::<JsString>(0)?.value();
    let path = cx.argument::<JsString>(1)?.value();
    file_output(message, "warn", path);
    Ok(cx.undefined())
}

register_module!(mut cx, {
    let _ = cx.export_function("consoleInfo", console_info);
    let _ = cx.export_function("consoleError", console_error);
    let _ = cx.export_function("consoleSuccess", console_success);
    let _ = cx.export_function("consoleWarn", console_warn);
    let _ = cx.export_function("fileInfo", file_info);
    let _ = cx.export_function("fileError", file_error);
    let _ = cx.export_function("fileSuccess", file_success);
    let _ = cx.export_function("fileWarn", file_warn);
    Ok(())
});