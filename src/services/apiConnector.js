import axios from "axios";

export const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    validateStatus: function (status) {
        return status >= 200 && status < 500; // Handle all statuses except server errors
    }
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  const defaultHeaders = {
    'Access-Control-Allow-Origin': 'https://smashicse-edtech-platform-1.onrender.com',
    'Access-Control-Allow-Credentials': 'true'
  };

  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: { ...defaultHeaders, ...(headers || {}) },
    params: params ? params : null,
  });
};
