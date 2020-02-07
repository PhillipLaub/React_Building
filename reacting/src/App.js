import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Nav from "./components/Nav";
import ItemDetail from "./components/ItemDetail";
import Artists from "./components/Artists";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/artists" exact component={Artists} />
          <Route path="/artists/:id" component={ItemDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

//create component without making another file
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
