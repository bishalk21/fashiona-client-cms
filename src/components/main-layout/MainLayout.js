import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { SideMenu } from "../header/side-menu/SideMenu";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <SideMenu />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
