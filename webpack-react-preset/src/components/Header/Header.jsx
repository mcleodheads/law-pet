import React from 'react';
import {Link} from "react-router-dom";

import {ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE} from "../../routes/constants";

import st from './header.module.css'

const Header = () => {
  return (
    <div className={st.wrapper}>
      <div className={st.container}>
        <Link
          className={st.logo}
          to={HOME_ROUTE}>
          <div >
            Logo
          </div>
        </Link>
        <div className={st.navbar}>
          <div className={st.navLink}>
            <Link
              className={st.link}
              to={ABOUT_ROUTE}>О нас</Link>
          </div>
          <div className={st.navLink}>
            <Link
              className={st.link}
              to={CONTACTS_ROUTE}>Контакты</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
