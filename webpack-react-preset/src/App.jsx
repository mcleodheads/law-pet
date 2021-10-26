import React from 'react';
import AppRoute from "./routes/AppRoute";
import Header from "./components/Header/Header";

import st from './assets/styles/app.module.css'
import SubHeader from "./components/SubHeader/SubHeader";

const App = () => {
  return (
    <div className={st.wrapper}>
      <div className={st.wrapperHeader}>
        <SubHeader />
        <Header/>
      </div>
      <div className={st.wrapperContent}>
        <AppRoute/>
      </div>
    </div>
  );
};

export default App;