import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

import { SideMenu } from "../side-menu/SideMenu";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <SideMenu />
      <main style={{ minHeight: "90vh" }} className="">
        {" "}
        {children}{" "}
      </main>
      <Footer />
    </>
  );
};
