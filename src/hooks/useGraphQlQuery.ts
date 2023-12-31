/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import { callGraphQl } from "../service/master";

const useGraphQlQuery = (
  graphQuery: () => {
    query: string;
    variables: Record<string, any>;
  },
  onSuccess?: (res: any) => void,
  onError?: (err: any) => void,
) => {
  const {
    data: graphAPIData,
    isLoading: isGraphAPILoading,
    isFetching: isGraphAPIFetching,
    isError: isGraphAPIError,
  } = useQuery("master", () => callGraphQl(graphQuery()), {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess,
    onError,
  });

  return {
    graphAPIData,
    isGraphAPILoading,
    isGraphAPIFetching,
    isGraphAPIError,
  };
};

export default useGraphQlQuery;
