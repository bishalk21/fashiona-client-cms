import React from "react";
import MainNavbar from "./MainNavbar";
import SpecialHead from "./SpecialHead";
import "./header.css";

const Header = () => (
  <div className="header sticky">
    {/* free shipping, payment methods, customer support + small screen - Need advice&#63; Call us +0123 456 789 */}
    <SpecialHead />

    {/* if !user ->  title,/logo, search bar(l - dropdown all categories, r - search logo, below search comp - some top categories), account sign up -> sign in page welcome user */}
    {/* if user -> side-menu, title,/logo, search bar(l - dropdown all categories, r - search logo, below search comp - some top categories), account sign out hello user, favorites, cart */}
    <MainNavbar />
  </div>
);

export default Header;
