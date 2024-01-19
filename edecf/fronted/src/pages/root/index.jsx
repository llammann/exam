import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../layout";
function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
