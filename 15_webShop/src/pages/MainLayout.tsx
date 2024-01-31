import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default MainLayout;
