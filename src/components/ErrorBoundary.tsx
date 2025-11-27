'use client';
import { Component, ReactNode } from 'react';
import { logError, logWarn } from '@/utils/logger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error boundary component for catching and handling React errors
 * Features:
 * - Catches JavaScript errors in component tree
 * - Logs errors with context
 * - Handles HMR errors gracefully
 * - Provides fallback UI
 * 
 * @param children - Child components to wrap
 * @param fallback - Custom fallback UI component
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }): void {
    // Log the error with context
    logError('Error caught by boundary', error, {
      componentStack: errorInfo.componentStack,
      errorBoundary: 'ErrorBoundary',
    });
    
    // Check if it's an HMR error
    if (error.message.includes('webpack-hmr') || error.message.includes('WebSocket')) {
      logWarn('HMR connection issue detected, this is usually not critical', {
        errorMessage: error.message,
      });
      
      // Reset error state after a short delay
      setTimeout(() => {
        this.setState({ hasError: false });
      }, 1000);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050D36] to-[#0A1A4A]">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#913BFF] to-[#104CBA] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h2>
              <p className="text-[#9AA0B5] mb-6">
                We encountered an unexpected error. Please refresh the page or try again later.
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-[#913BFF] to-[#104CBA] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#7C2BE0] hover:to-[#0D3A7A] transition-all duration-300"
              >
                Refresh Page
              </button>
              
              <button
                onClick={() => window.history.back()}
                className="w-full bg-transparent border-2 border-[#913BFF] text-[#913BFF] px-6 py-3 rounded-lg font-semibold hover:bg-[#913BFF]/10 transition-all duration-300"
              >
                Go Back
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-sm text-[#9AA0B5] cursor-pointer hover:text-white">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-black/20 rounded-lg text-xs text-red-400 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
