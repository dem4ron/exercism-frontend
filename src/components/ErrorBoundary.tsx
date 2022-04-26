import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundry extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      "This is your error, that should be handled:",
      error,
      errorInfo
    );
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: "grid", placeContent: "center" }}>
          Something went wrong, please refresh the page!
        </div>
      );
    }

    return this.props.children;
  }
}
