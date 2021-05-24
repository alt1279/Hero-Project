import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class HeroList extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "View" };
  }

  render() {
    const linkStyle = {
      color: "white",
    };

    return (
      <div>
        <ul className="nav-bar">
          <Link style={linkStyle} to="/searchHero">
            <li>Search</li>
          </Link>
          <Link style={linkStyle} to="/view">
            <li>View</li>
          </Link>
          <Link style={linkStyle} to="/add">
            <li>Add</li>
          </Link>
          <Link style={linkStyle} to="/update">
            <li>Update</li>
          </Link>
          <Link style={linkStyle} to="/delete">
            <li>Delete</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default HeroList;
