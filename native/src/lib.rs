extern crate chrono;
extern crate colorful;
extern crate neon;

use colorful::Color;
use colorful::Colorful;
use neon::prelude::*;
use std::fs;
use std::path;

fn console_output(message: String, log_type: &str) -> () {
    let now = chrono::Local::now();
    let now = now.format("[%Y-%m-%d %H:%M:%S%.3f] ").to_string();
    let output = now + "[" + log_type + "] " + &message;
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
    let output = now + "[" + log_type + "] " + &message;
    if !path::Path::new(&true_path).exists() {
        fs::File::create(&true_path).expect("Cannot create log file");
    }
    let log_file_content = fs::read_to_string(&true_path).expect("Cannot read log file");
    let mut new_line = "";
    if log_file_content != "" {
        new_line = "\n";
    }
    let log_file_content = log_file_content + new_line + &output;
    fs::write(true_path, log_file_content).expect("Cannot write to log file");
}

fn console_log(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let message = cx.argument::<JsString>(0)?.value();
    let log_type = cx.argument::<JsString>(1)?.value();
    if log_type == String::from("info") {
        console_output(message, "info");
    } else if log_type == String::from("warn") {
        console_output(message, "warn");
    } else if log_type == String::from("error") {
        console_output(message, "error");
    } else if log_type == String::from("success") {
        console_output(message, "success");
    }
    Ok(cx.undefined())
}

fn file_log(mut cx: FunctionContext) -> JsResult<JsUndefined> {
    let message = cx.argument::<JsString>(0)?.value();
    let log_type = cx.argument::<JsString>(1)?.value();
    let path = cx.argument::<JsString>(2)?.value();
    if log_type == String::from("info") {
        file_output(message, "info", path);
    } else if log_type == String::from("warn") {
        file_output(message, "warn", path);
    } else if log_type == String::from("error") {
        file_output(message, "error", path);
    } else if log_type == String::from("success") {
        file_output(message, "success", path);
    }
    Ok(cx.undefined())
}

register_module!(mut cx, {
    let _ = cx.export_function("consoleLog", console_log);
    let _ = cx.export_function("fileLog", file_log);
    Ok(())
});
