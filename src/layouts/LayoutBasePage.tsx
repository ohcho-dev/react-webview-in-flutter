import React, { useEffect } from "react";
import styled from "styled-components";
import ReactGA from "react-ga4";

const BasePage = styled.div``;

interface LayoutBasePageProps {
  children?: React.ReactNode;
}
const LayoutBasePage: React.FC<LayoutBasePageProps> = ({ children }) => {
  const gaTrackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;

  useEffect(() => {
    gaTrackingId && getGA();
  }, [window.location.href, gaTrackingId]);

  const getGA = () => {
    let location = window.location;
    console.log(location);
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID || "");
    ReactGA.set({ page: location.pathname + location.search + location.hash });
    ReactGA.send("pageview");
  };

  return <BasePage id="body">{children}</BasePage>;
};

export default LayoutBasePage;
