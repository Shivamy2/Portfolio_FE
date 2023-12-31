/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://portfolio-be-cfxq.onrender.com",
});

axiosInstance.interceptors.response.use(
  (res) => res?.data,
  (err) => {
    console.error(
      err?.response?.data?.errors?.forEach((err: any) =>
        console.log(err?.message),
      ),
    );
    return Promise.reject(err);
  },
);

export default axiosInstance;
