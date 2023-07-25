import type { ReactNode } from "react";
import type { FallbackProps } from "react-error-boundary";

import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const SuspenseFallback = () => {
  return <p>Loading...</p>;
};

const ErrorBoundaryFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <>
      <p>{error.message}</p>

      <button onClick={resetErrorBoundary}>Retry</button>
    </>
  );
};

interface QueryBoundariesProps {
  children: ReactNode;
}

export const GenericQueryBoundaries = ({ children }: QueryBoundariesProps) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onReset={reset}>
        <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);
