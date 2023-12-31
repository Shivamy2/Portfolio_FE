import React, { Suspense, createContext, memo } from "react";
import "./App.css";
import Routes from "./utils/router";
import { IMasterContext } from "./context/interface";
import { getCurrentEmployee } from "./constants/query";
import { applyTheme } from "./utils/helper";
import FallbackLoader from "./shared/FallbackLoader";
import { callGraphQl } from "./service/master";
import { useQuery } from "react-query";

export const ProfileContext = createContext<IMasterContext | null>(null);
function App() {
  const {
    data: graphAPIData,
    isLoading: isGraphAPILoading,
    isFetching: isGraphAPIFetching,
    isError: isGraphAPIError,
  } = useQuery(
    "master",
    () => callGraphQl(getCurrentEmployee(window.location.hostname)),
    {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: async (res) => {
        if (!res?.data?.getCurrectEmployeeData?.length) {
          return (
            <div className="text-center text-2xl text-red-700 mt-20">
              No Data Found
            </div>
          );
        }
        await applyTheme(
          res?.data?.getCurrectEmployeeData[0]?.details[0]?.theme,
        );
        const link = document.querySelector('link[rel="icon"]');
        const linkApple = document.querySelector(
          'link[rel="apple-touch-icon"]',
        );
        if (link)
          link.setAttribute(
            "href",
            res?.data?.getCurrectEmployeeData[0]?.details[0]?.dpUrl,
          );
        if (linkApple)
          linkApple.setAttribute(
            "href",
            res?.data?.getCurrectEmployeeData[0]?.details[0]?.dpUrl,
          );
      },
    },
  );
  if (isGraphAPIError) {
    return (
      <div className="text-center text-2xl text-red-700 mt-20">
        No Data Found
      </div>
    );
  }
  return (
    <ProfileContext.Provider
      value={{
        currentProfile: graphAPIData?.data?.getCurrectEmployeeData?.[0],
      }}
    >
      <Suspense fallback={<FallbackLoader />}>
        {isGraphAPILoading || isGraphAPIFetching ? (
          <FallbackLoader />
        ) : (
          <Routes />
        )}
      </Suspense>
    </ProfileContext.Provider>
  );
}

export default memo(App);
