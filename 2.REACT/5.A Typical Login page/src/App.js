import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const loginSaveLocal = localStorage.getItem("loginInfo");
  //   if (loginSaveLocal == 1) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("loginInfo", 1);
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("loginInfo");
  //   setIsLoggedIn(false);
  // };
  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler,
    //   }}
    // >
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
    // </AuthContext.Provider>
  );
}

export default App;
