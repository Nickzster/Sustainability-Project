import React from "react";
import LandingPage from "./components/LandingPage/index";
import Quiz from "./components/Quiz";
import Page from "./components/Page";
import NotFound from "./components/NotFound/NotFound";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/sustainability-quiz" component={Quiz} />
          <Route exact path="/page/:id" component={Page} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

/* For page component, pass down the props match as a string, and access the url via match.params.id */
export default App;
