import React from "react";
import { HashLink } from "react-router-hash-link";
import style from "./HomePageNav.module.css";
const HomePageNav = () => {
  return (
    <header>
      <nav className={style.navigation} id="navigation">
        <div className={style.navBackground}></div>
        <ul>
          <li>
            <HashLink to={"#navigation"} smooth>
              HOME
            </HashLink>
          </li>
          <li>
            <HashLink to={"#order"} smooth>
              BUY
            </HashLink>
          </li>
          <li>
            <HashLink to={"#about"} smooth>
              ABOUT
            </HashLink>
          </li>
          <li>
            <HashLink to={"#contact"} smooth>
              CONTACT US
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomePageNav;
