/**
 * Logging utility for error tracking and debugging
 */

export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
}

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
  error?: Error;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isClient = typeof window !== 'undefined';

  /**
   * Log an error message
   * @param message - Error message
   * @param error - Error object
   * @param context - Additional context
   */
  error(message: string, error?: Error, context?: Record<string, unknown>): void {
    this.log(LogLevel.ERROR, message, context, error);
  }

  /**
   * Log a warning message
   * @param message - Warning message
   * @param context - Additional context
   */
  warn(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, message, context);
  }

  /**
   * Log an info message
   * @param message - Info message
   * @param context - Additional context
   */
  info(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context);
  }

  /**
   * Log a debug message
   * @param message - Debug message
   * @param context - Additional context
   */
  debug(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  /**
   * Internal logging method
   * @param level - Log level
   * @param message - Log message
   * @param context - Additional context
   * @param error - Error object
   */
  private log(
    level: LogLevel,
    message: string,
    context?: Record<string, unknown>,
    error?: Error
  ): void {
    const logEntry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      ...(context ? { context } : {}),
      ...(error ? { error } : {}),
    } as LogEntry;

    // Console logging in development
    if (this.isDevelopment) {
      this.logToConsole(logEntry);
    }

    // Send to external service in production
    if (!this.isDevelopment && this.isClient) {
      this.sendToExternalService(logEntry);
    }
  }

  /**
   * Log to browser console
   * @param entry - Log entry
   */
  private logToConsole(entry: LogEntry): void {
    const { level, message, timestamp, context, error } = entry;
    const logMessage = `[${timestamp}] ${level.toUpperCase()}: ${message}`;

    switch (level) {
      case LogLevel.ERROR:
        console.error(logMessage, context, error);
        break;
      case LogLevel.WARN:
        console.warn(logMessage, context);
        break;
      case LogLevel.INFO:
        console.info(logMessage, context);
        break;
      case LogLevel.DEBUG:
        console.debug(logMessage, context);
        break;
    }
  }

  /**
   * Send log entry to external service
   * @param entry - Log entry
   */
  private async sendToExternalService(entry: LogEntry): Promise<void> {
    try {
      // In a real application, you would send this to your logging service
      // For now, we'll just store it in localStorage for demonstration
      if (this.isClient) {
        const logs = JSON.parse(localStorage.getItem('app_logs') || '[]');
        logs.push(entry);
        
        // Keep only last 100 logs
        if (logs.length > 100) {
          logs.splice(0, logs.length - 100);
        }
        
        localStorage.setItem('app_logs', JSON.stringify(logs));
      }
    } catch (error) {
      console.error('Failed to send log to external service:', error);
    }
  }

  /**
   * Get stored logs
   * @returns Array of log entries
   */
  getLogs(): LogEntry[] {
    if (!this.isClient) return [];
    
    try {
      return JSON.parse(localStorage.getItem('app_logs') || '[]');
    } catch (error) {
      console.error('Failed to retrieve logs:', error);
      return [];
    }
  }

  /**
   * Clear stored logs
   */
  clearLogs(): void {
    if (this.isClient) {
      localStorage.removeItem('app_logs');
    }
  }
}

// Export singleton instance
export const logger = new Logger();

// Export convenience functions
export const logError = (message: string, error?: Error, context?: Record<string, unknown>) => 
  logger.error(message, error, context);

export const logWarn = (message: string, context?: Record<string, unknown>) => 
  logger.warn(message, context);

export const logInfo = (message: string, context?: Record<string, unknown>) => 
  logger.info(message, context);

export const logDebug = (message: string, context?: Record<string, unknown>) => 
  logger.debug(message, context);
