import axios from "axios";

const headers = {
  "content-Type": "application/json",
};

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

  if (res.status === 200) {
    console.log("send slack message ok");
  } else {
    console.log("send slack message error");
  }
};
