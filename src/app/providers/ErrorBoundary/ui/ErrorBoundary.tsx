import { Component, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    render(): ReactNode {
        const { hasError } = this.state;
        const { children } = this.props; // eslint-disable-line react/prop-types

        if (hasError) {
            return (
                <Suspense fallback=''>
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

export { ErrorBoundary };
