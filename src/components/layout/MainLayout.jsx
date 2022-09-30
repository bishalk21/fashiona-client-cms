import React, { Children } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { HeaderPage } from "../header/HeaderPage";
import { NavbarPage } from "../navbar/NavbarPage";
import { SideMenu } from "../side-menu/SideMenu";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <SideMenu />
      <main style={{ minHeight: "90vh" }} className="">
        {" "}
        {children}{" "}
      </main>
      <Footer />
    </div>
  );
};
