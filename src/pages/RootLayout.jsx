import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { userActions } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./LoginPage";
import { auth } from "../config/Firebase";
import Menubar from "../components/Menubar";

const Rootlayout = () => {
  const dispatch = useDispatch();
  const userIsLogin = useSelector((state) => state.user.isLogin);

  useEffect(() => {
    auth.onAuthStateChanged(
      (userAuth) => userAuth && dispatch(userActions.loginUser())
    );
  }, []);

  return (
    <div>
      {userIsLogin ? (
        <div>
          <Header />
          <Menubar />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default Rootlayout;
