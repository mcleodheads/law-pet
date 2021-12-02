import React from 'react';
import AppRoute from "./routes/AppRoute";
import Header from "./components/Header";
import st from './assets/styles/app.module.css'

const App = () => {
  return (
    <div className={st.wrapper}>
      <div className={st.header}>
        <Header />
      </div>
      <div className={st.content}>
        <AppRoute/>
      </div>
    </div>
  );
};

export default App;
