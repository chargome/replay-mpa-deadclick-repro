import * as Sentry from "@sentry/browser";

export function initSentry() {
  Sentry.init({
    dsn: "DSN",
    integrations: [
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
    debug: true,
  });

  // Add bfcache detection for debugging
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      console.log("This page was restored from the bfcache");
    }
  });
}
