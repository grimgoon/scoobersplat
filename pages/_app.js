import "../styles/globals.scss";
import Head from "next/head";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { CaptureConsole as CaptureConsoleIntegration } from "@sentry/integrations";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../components/utils/gaPageview";

Sentry.init({
  dsn:
    "https://9bcccc7f13a2490e922469709816d1c0@o630625.ingest.sentry.io/5755190",
  integrations: [
    new Integrations.BrowserTracing(),
    new CaptureConsoleIntegration({
      levels: ["error"],
    }),
  ],
  release: "knackelibang@1.0",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Scoobersplat</title>
        <meta name="description" content="Making the coolest co-op games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
