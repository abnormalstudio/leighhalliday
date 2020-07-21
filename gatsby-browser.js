const Appsignal = require("@appsignal/javascript");
const { ErrorBoundary } = require("@appsignal/react");

const appsignal = new Appsignal({
  key: process.env.APPSIGNAL_KEY,
});

const FallbackComponent = () => <div>Uh oh! There was an error :(</div>;

exports.wrapRootElement = ({ element }) => (
  <ErrorBoundary
    instance={appsignal}
    fallback={(error) => <FallbackComponent />}
  >
    {element}
  </ErrorBoundary>
);
