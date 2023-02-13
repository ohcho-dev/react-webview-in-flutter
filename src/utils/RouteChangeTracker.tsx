import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // if (!window.location.href.includes("localhost")) {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID) {
      ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID}`);
    }
    // }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send({
        hitType: "pageview",
        page: `${location.pathname + location.search + location.hash}`,
      });
    }
  }, [initialized, location]);
};
export default RouteChangeTracker;
