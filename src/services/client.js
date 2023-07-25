import axios from "axios";

const config = {
  method: "post",
  maxBodyLength: Infinity,
  header: { "content-type": "application/json" },
  baseURL: `https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/`,
};

export const instance = axios.create(config);

const client = async (url, params) => {
  const response = await instance(url, params);
  return response;
};

export default client;
