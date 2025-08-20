import * as Sentry from "@sentry/react-router";

Sentry.init({
    dsn: "https://bd1b9d16cfedab5c44d27e302d95a8bf@o4509867396104192.ingest.us.sentry.io/4509867400036352",

    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
});
