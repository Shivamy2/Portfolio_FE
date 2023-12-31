/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "../constants/axios";

export const callGraphQl = async (body: {
  query: string;
  variables: Record<string, any>;
}) => {
  const result = await axiosInstance.post("/graphql", body);
  return result;
};
