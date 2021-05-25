import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import logo from "./logo.svg";
import "./App.css";
import HeroList from "./components/heroList";
import Add from "./components/add";
import View from "./components/view";
import Delete from "./components/delete";
import Update from "./components/update";
import Search from "./components/search";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeroList />
          <Route path="/add" component={Add} />
          <Route path="/view" component={View} />
          <Route path="/delete" component={Delete} />
          <Route path="/update" component={Update} />
          <Route path="/searchHero" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
