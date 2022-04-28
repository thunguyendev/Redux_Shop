import React from "react";
import Header from "../component/Header";
import Line from "../component/Line";
import Navbar from "../component/Navbar";
import { useTranslation } from "react-i18next";

import HeaderBottom from "../component/HeaderBottom";
import Footer from "../component/Footer";
import SideBar from "../component/SideBar";
import ProductCard from "../component/ProductCard";
const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      <Line height={4} color={" #ebebeb"} />
      <Navbar />
      <HeaderBottom title={t("header_bottom.1")}/>
      <div className="row">
        <SideBar></SideBar>
        <ProductCard />
      </div>

      <Footer />
    </>
  );
};

export default Home;
