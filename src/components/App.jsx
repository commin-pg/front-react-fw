import { LoadingOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "hoc/auth.provider";
import RequireAuth from "hoc/RequireAuth";
import React, { lazy, Suspense } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import "./App.css";
import AuthState from "./layout/AuthState";
import MainLayout from "./layout/MainLayout";
import NoAuthLayout from "./layout/NoAuthLayout";
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
    <AuthProvider>
      <Suspense fallback={<LoadingOutlined />}>
        <Routes>
          <Route element={<AuthState />}>
            <Route element={<MainLayout />}>
              <Route path='/' element={<RequireAuth><LandingPage /></RequireAuth>} />
              <Route path='/stock/' element={<RequireAuth><StockPage /></RequireAuth>} />
              <Route path='/stock/deleted' element={<RequireAuth><StockDeletedPage /></RequireAuth>} />
              <Route path='/stock/candidate' element={<RequireAuth><StockCandidatePage /></RequireAuth>} />


              <Route path='/mypage/finance_manage' element={<RequireAuth><FinanceManagePage /></RequireAuth>} />
              <Route path='/mypage/stock_manage' element={<RequireAuth><StockMangePage /></RequireAuth>} />
              <Route path='/mypage/password' element={<RequireAuth><PasswordManagePage /></RequireAuth>} />

            </Route>

          </Route>


          <Route element={<NoAuthLayout />}>
            <Route path='/login' element={<MyLoginPage />} />
          </Route>

        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
