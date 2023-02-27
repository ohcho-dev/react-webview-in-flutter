import axios from "axios";

export const sendSlackMessage = async (data: any) => {
  const res = await axios.post(
    `${process.env.REACT_APP_APPLY_SLACK_WEBHOOK_URL}`,
    JSON.stringify(data),
    {
      withCredentials: false,
      transformRequest: [
        data => {
          return data;
        },
      ],
    },
  );
};
