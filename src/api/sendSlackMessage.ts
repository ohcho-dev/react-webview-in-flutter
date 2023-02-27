import axios from "axios";

const SLACK_WEBHOOK_URL = `${process.env.REACT_APP_APPLY_SLACK_WEBHOOK_URL}`;

export const sendSlackMessage = async (data: any, url: string = SLACK_WEBHOOK_URL) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  try {
    await axios({
      method: "post",
      url,
      data: data,
      headers: headers,
    });
  } catch (err) {
    console.warn(err);
  }
};
