/**
 * ErrorBoundary
 */
import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  // whenever we got an error, it will be catched by this buit-in getDerivedStateFromError
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
