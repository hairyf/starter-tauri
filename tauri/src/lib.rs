// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        // Sql store plugin
        .plugin(tauri_plugin_sql::Builder::new().build())
        // Simple Store plugin
        .plugin(tauri_plugin_store::Builder::new().build())
        // Notification plugin
        .plugin(tauri_plugin_notification::init())
        // Barcode scanner plugin
        .plugin(tauri_plugin_barcode_scanner::init())
        // Biometric plugins
        .plugin(tauri_plugin_biometric::init())
        // Opener plugin
        .plugin(tauri_plugin_opener::init())
        // Custom protocol plugin
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
