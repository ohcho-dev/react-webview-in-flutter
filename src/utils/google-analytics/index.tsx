import ReactGA4 from "react-ga4";

const InitializeGoogleAnalytics = () => {
  ReactGA4.initialize("G-RZ0C7WRZ1Y");
};

const TrackGoogleAnalyticsEvent = (category: string, action: string, label: string) => {
  process.env.NODE_ENV === "development" &&
    console.log("GA event:", category, ":", action, ":", label);

  ReactGA4.event({
    category: category,
    action: action,
    label: label,
  });
};

export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent };
