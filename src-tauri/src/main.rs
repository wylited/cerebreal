#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn backend_add(number: i32) -> i32 {
    // Note: these commands block the main thread and hang the UI until they return.
    // If you need to run a long-running task, use async command instead.
    println!("Backend was called with an argument: {}", number);
    number + 2
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![backend_add])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
