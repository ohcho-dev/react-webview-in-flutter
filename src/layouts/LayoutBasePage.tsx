import React, { useEffect } from "react";
import styled from "styled-components";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const BasePage = styled.div``;

interface LayoutBasePageProps {
  children?: React.ReactNode;
}
const LayoutBasePage: React.FC<LayoutBasePageProps> = ({ children }) => {
  const location = useLocation();
  const gaTrackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;

  useEffect(() => {
    gaTrackingId && getGA();
  }, [window.location.href, gaTrackingId]);

  const getGA = () => {
    let location = window.location;
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID || "");
    ReactGA.send({
      hitType: "pageview",
      page: `${location.pathname + location.search + location.hash}`,
    });
  };

  ReactGA.event({
    category: "router",
    action: `${location.pathname + location.search + location.hash}`,
    // label: "your label", // optional
    // value: 99, // optional, must be a number
    // nonInteraction: true, // optional, true/false
    // transport: "xhr", // optional, beacon/xhr/image
  });

  return <BasePage id="body">{children}</BasePage>;
};

export default LayoutBasePage;
