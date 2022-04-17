import { LoadingOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import "./App.css";
import MainLayout from "./layout/MainLayout";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage";
import MyLoginPage from "./views/LoginPage/MyLoginPage";
import FinanceManagePage from "./views/MyPage/FinanceManagePage";
import PasswordManagePage from "./views/MyPage/PasswordManagePage";
import StockMangePage from "./views/MyPage/StockMangePage";
import StockCandidatePage from "./views/StockPage/StockCandidatePage";
import StockDeletedPage from "./views/StockPage/StockDeletedPage";
import StockPage from "./views/StockPage/StockPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<LoadingOutlined />}>
      <Switch>
        <MainLayout>
          <Route exact path="/" component={Auth(LandingPage, true)} />
          <Route exact path="/stock" component={Auth(StockPage, true)} />
          <Route exact path="/stock/deleted" component={Auth(StockDeletedPage, true)} />
          <Route exact path="/stock/candidate" component={Auth(StockCandidatePage, true)} />

          <Route exact path="/mypage/finance_manage" component={Auth(FinanceManagePage, true)} />
          <Route exact path="/mypage/stock_manage" component={Auth(StockMangePage, true)} />
          <Route exact path="/mypage/password" component={Auth(PasswordManagePage, true)} />

          <Route exact path="/login" component={Auth(MyLoginPage, false)} />

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
