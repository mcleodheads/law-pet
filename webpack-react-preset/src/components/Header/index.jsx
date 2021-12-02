import React from 'react';

import st from './header.module.css'
import {Link} from "react-router-dom";
import {ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE} from "../../routes/constants";

const Header = () => {
  return (
    <div className={st.wrapper}>
      <div className={st.topHeader}>
        <div className={st.topHeaderWrapper}>
          <div className={st.logo}>
            <Link to={HOME_ROUTE}>
              logo
            </Link>
          </div>
          <span className={st.strip}></span>
          <div className={st.contact}>
            <span className={st.phoneText}>
              Бесплатная консульнация по телефону
            </span>
            <span className={st.phone}>
              <button className={st.phoneBtn}>
                8 (999) 999-99-99
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className={st.bottomHeader}>
        <div className={st.menu}>
          <div className={st.linksBar}>
            <Link className={st.link} to={HOME_ROUTE}>
              <div className={st.linkItem}>
                Отзывы
              </div>
            </Link>
            <Link className={st.link} to={ABOUT_ROUTE}>
              <div className={st.linkItem}>
                О нас
              </div>
            </Link>
            <Link className={st.link} to={CONTACTS_ROUTE}>
              <div className={st.linkItem}>
                Контакты
              </div>
            </Link>
            <Link className={st.link} to={CONTACTS_ROUTE}>
              <div className={st.linkItem}>
                Карта
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
