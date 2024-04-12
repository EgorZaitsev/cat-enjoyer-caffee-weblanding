import React from "react";
import Logo from "./components/Logo.tsx";
import SubTitle from "./components/SubTitle.tsx";
import Menu from "./components/Menu.tsx";
import Order from "./components/Order.tsx";
import Footer from "./components/Footer.tsx";

export default function Main() {
  return (
    <>
      <Logo />
      <SubTitle />
      <Menu />
      <Order />
      <Footer />
    </>
  );
}
