"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    // private constructor -> ngăn tạo trực tiếp bằng new
    constructor() { }
    // Lấy instance duy nhất
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    // Method log
    log(message) {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }
    error(message) {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
    }
}
exports.Logger = Logger;
Logger.getInstance().log("test log");
Logger.getInstance().error("test err");
