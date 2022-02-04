import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import NotFoundPage from "./views/ErrorPage/NotFoundPage.js";
import JobIntroPage from "./views/JobIntroPage/JobIntroPage.js";
import IntroPage from "./views/IntroPage/IntroPage.js";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <NavBar /> */}
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/intro" component={IntroPage} />
          <Route exact path="/intro/job" component={JobIntroPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>

      {/* <Footer /> */}
    </Suspense>
  );
}

export default App;
