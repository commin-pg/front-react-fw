import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import HomeDark from '../views/home-theme/HomeDark';
import NotFound from '../views/NotFound';
import Preview from '../views/Preview';
function Routes() {
  return <>
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Preview}/>
        <Route exact path='/home' component={HomeDark}/>
        <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
  </>;
}

export default Routes;
