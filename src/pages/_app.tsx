import type { AppProps } from "next/app";

import { GenericErrorBoundaryFallback } from "@/common/components/generic-error-boundary-fallback";
import { createQueryClient } from "@/library/react-query/create-query-client";
import "@/stylesheets/index.css";
import {
  type DehydratedState,
  Hydrate,
  QueryClientProvider,
} from "@tanstack/react-query";
import Head from "next/head";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const App = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) => {
  const [queryClient] = useState(createQueryClient);

  return (
    <>
      <Head>
        <title>Next.js GraphQL Contentful Blog</title>

        <link href="/images/favicon.ico" rel="icon" />
      </Head>

      <ErrorBoundary FallbackComponent={GenericErrorBoundaryFallback}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
