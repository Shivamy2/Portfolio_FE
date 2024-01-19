/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { baseURL } from ".";

const axiosInstance = axios.create({
  baseURL,
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
