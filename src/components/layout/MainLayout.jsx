import React, { Children } from "react";
import { Footer } from "../footer/Footer";
import { HeaderPage } from "../header/HeaderPage";
import { NavbarPage } from "../navbar/NavbarPage";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderPage />
      <main style={{ minHeight: "90vh" }} className="">
        {" "}
        {children}{" "}
      </main>
      <Footer />
    </div>
  );
};
