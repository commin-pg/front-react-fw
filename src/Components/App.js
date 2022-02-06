import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ImagePage from "./views/ImagePage/ImagePage";
import LadingPage from "./views/LandingPage/LadingPage";
import TabPage from "./views/TabPage/TabPage";

function App() {
  return (
    <Suspense fallback={(<div>Loading ...</div>)}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={LadingPage} />
          <Route exact path="/slider" component={ImagePage} />
          <Route exact path="/tab" component={TabPage} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
