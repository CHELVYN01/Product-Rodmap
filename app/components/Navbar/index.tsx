import React from "react";
import style from "./Navbar.module.css";

function navbar() {
  return (
    <div>
      <nav className={style.nav}>
        <h1 className={style.logo}>Product Roadmap</h1>
      </nav>
    </div>
  );
}

export default navbar;
