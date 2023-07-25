import { instance } from "./client";

const apikey = process.env.REACT_APP_API_KEY;

export const fetchAllSubscribers = async (params) => {
  const { data } = await instance({
    url: `${apikey}/`,
    params,
  });
  return data;
};

export const subscribe = async (payload) => {
  const { params, email, topic, typeOfSubscriber } = payload;

  const { data } = await instance({
    url: `${apikey}/`,
    params,
    data: { topic, subscriberEmail: email, typeOfSubscriber },
  });
  return data;
};

export const unsubscribe = async (payload) => {
  const { params, email, topic, typeOfSubscriber, reasons } = payload;

  const { data } = await instance({
    url: `${apikey}/`,
    params,
    data: {
      topic,
      subscriberEmail: email,
      typeOfSubscriber,
      reasonToUnsubscribe: reasons,
    },
  });
  return data;
};
