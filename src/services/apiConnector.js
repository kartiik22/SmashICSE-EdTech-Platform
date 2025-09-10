import axios from "axios";

export const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    },
    validateStatus: function (status) {
        return status >= 200 && status < 500; // Handle all statuses except server errors
    }
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers || {},
    params: params ? params : null,
  });
};
