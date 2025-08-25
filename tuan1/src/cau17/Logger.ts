export class Logger {
  private static instance: Logger;

  // private constructor -> ngăn tạo trực tiếp bằng new
  private constructor() {}

  // Lấy instance duy nhất
  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  // Method log
  public log(message: string): void {
    console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
  }

  public error(message: string): void {
    console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
  }
}

Logger.getInstance().log("test log");
Logger.getInstance().error("test err");
