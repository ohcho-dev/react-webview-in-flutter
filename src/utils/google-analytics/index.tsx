import ReactGA4 from "react-ga4";

const InitializeGoogleAnalytics = (userId?: string, childId?: number) => {
  ReactGA4.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID}`, {
    gaOptions: {
      user_id: userId,
    },
  });
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
