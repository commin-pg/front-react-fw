import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./views/Footer/Footer";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage";
import MyLoginPage from "./views/LoginPage/MyLoginPage";
import "antd/dist/antd.css";
import Auth from "../hoc/auth";
import GullLoadable from "./views/@gull/components/GullLoadable/GullLoadable";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./layout/MainLayout";
import StockPage from "./views/StockPage/StockPage";
import Base from "./views/Footer/Base";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<GullLoadable />}>

      <Switch>
        <MainLayout>
          <Route exact path="/" component={Auth(LandingPage, true)} />
          <Route exact path="/stock" component={Auth(StockPage, true)} />
          <Route exact path="/login" component={Auth(MyLoginPage, false)} />

          <Base />
        </MainLayout>


        {/* <Route exact path="/" component={Auth(LandingPage, true)} /> */}
        {/* <Route exact path="/login" component={Auth(LoginPage, false)} /> */}
        {/* <Route exact path="/login" component={Auth(LoginPage, false)} /> */}
        {/* <Route exact path="/register" component={Auth(RegisterPage, false)} /> */}
      </Switch>



    </Suspense>
  );
}

export default App;
