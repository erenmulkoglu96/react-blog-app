import React from 'react'
import HeaderFunction from './compontents/HeaderFunction'
import FooterFunction from './compontents/FooterFunction'
import MainFunction from "./compontents/MainFunction";

// Router
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from './compontents/login/LoginForm';
import RegisterForm from './compontents/register/RegisterForm';

// Redux Login


// RouterBlog
function RouterBlog() {
  return (
    <React.Fragment>
      <HeaderFunction name="Eren Mülkoğlu" />
      <div className="container">
        <Routes>
          <Route path={"/"} element={<MainFunction />} />
          <Route path={"/index"} element={<MainFunction />} />
          <Route path={"/login"} element={<LoginForm />} />
          <Route path={"/register"} element={<RegisterForm />} />
          <Route path={"*"} element={<Navigate to={"/"} />} />
        </Routes>
      </div>

      {/* MainFunction */}
      {/* <MainFunction /> */}

      {/* FooterFunction */}
      <FooterFunction />
    </React.Fragment>
  )
}

export default RouterBlog