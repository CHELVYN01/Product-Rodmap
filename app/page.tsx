import React from "react";
import Navbar from "./components/Navbar";
import MainCard from "./components/MainCard";
import style from "./page.module.css";

function page() {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <MainCard groupName="Grup Task 1" />
        <MainCard groupName="Grup Task 2" />
        <MainCard groupName="Grup Task 3" />
        <MainCard groupName="Grup Task 4" />
      </div>
    </div>
  );
}

export default page;
