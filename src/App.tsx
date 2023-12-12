import React, { Suspense, memo } from "react";
import "./App.css";
import Routes from "./utils/router";
import Loader from "./shared/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes />
    </Suspense>
  );
}

export default memo(App);
