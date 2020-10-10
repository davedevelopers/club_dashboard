import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

import MainNavigation from "./components/MainNavigation";
import Home from "./pages/Home";
import Team_Page from "./pages/memberlist";

function App() {
    const clubname="Dsc"
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/:clubname/memberlist" exact render = {routerProps => Team_Page(routerProps)}>
           
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
