import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";

import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import ClassPage from "./views/ClassPage/ClassPage";
import ContactPage from "./views/ContactPage/ContactPage";
import GalleryPage from "./views/GalleryPage/GalleryPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, false)} />
          <Route exact path="/class" component={Auth(ClassPage, false)} />
          <Route exact path="/gallery2" component={Auth(GalleryPage, false)} />
          <Route exact path="/contact" component={Auth(ContactPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
