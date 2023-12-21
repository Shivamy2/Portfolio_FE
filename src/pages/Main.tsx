import React, { memo } from "react";
import Header from "../shared/Header";
import Center from "../components/Center";
import About from "../components/About";

function Main() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Center />
      <About />
    </div>
  );
}

export default memo(Main);
