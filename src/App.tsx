import React, { Suspense, createContext, memo } from "react";
import "./App.css";
import Routes from "./utils/router";
import { IMasterContext } from "./context/interface";
import { getCurrentEmployee } from "./constants/query";
import { applyTheme } from "./utils/helper";
import FallbackLoader from "./shared/FallbackLoader";
import { callGraphQl } from "./service/master";
import { useQuery } from "react-query";
import Page404 from "./pages/Page404";

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
  if (
    !isGraphAPILoading &&
    !graphAPIData?.data?.getCurrectEmployeeData?.length
  ) {
    return <Page404 />;
  }
  if (isGraphAPIError) {
    return <Page404 />;
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
