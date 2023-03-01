import React from "react";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
};

export default Body;
