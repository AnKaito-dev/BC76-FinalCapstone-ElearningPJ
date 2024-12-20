import React from "react";
import FooterTemplate from "./components/FooterTemplate";
import { Outlet } from "react-router-dom";
import HeaderTemplate from "./components/HeaderTemplate";

const HomeTemplate = () => {
  return (
    <>
      <HeaderTemplate />
      <Outlet />
      <FooterTemplate />
    </>
  );
};

export default HomeTemplate;
