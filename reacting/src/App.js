import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Nav from "./components/Nav";
import ItemDetail from "./components/ItemDetail";
import Songs from "./components/Songs";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/songs" exact component={Songs} />
          <Route path="/songs/:id" component={ItemDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

//create component without making another file
const Home = () => (
  <div>
    <h1>Home Page</h1>
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8"><p>Just messing around with Genius API, playing with Hooks and React Router</p></div>
      <div className="col-md-2"></div>
    </div>
  </div>
);

export default App;
