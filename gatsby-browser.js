import React from "react";
import Appsignal from "@appsignal/javascript";
import { ErrorBoundary } from "@appsignal/react";

const appsignal = new Appsignal({
  key: process.env.GATSBY_APPSIGNAL_KEY,
});

const FallbackComponent = () => <div>Uh oh! There was an error :(</div>;

const wrapRootElement = ({ element }) => (
  <ErrorBoundary
    instance={appsignal}
    fallback={(error) => <FallbackComponent />}
  >
    {element}
  </ErrorBoundary>
);

export { wrapRootElement };
