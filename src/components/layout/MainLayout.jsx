import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

import { SideMenu } from "../side-menu/SideMenu";
import { ScrollToTop } from "./ScrollToTop";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <SideMenu />
      <main className="main"> {children}</main>
      <ScrollToTop />
      <Footer />
    </>
  );
};
