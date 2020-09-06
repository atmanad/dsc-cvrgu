import React from "react";
import "./css/hover.css";
import "./css/Style.css";
import "./css/navbar.css";
import "./css/main.css";
import "./css/contact.css";
import "./css/footer.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/home";
import Events from "./components/events";
import Team from "./components/team";
import Contact from "./components/contact";
import Login from "./components/login";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" exact component={Events} />
          <Route path="/team" exact component={Team} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
