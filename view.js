import React, { Component } from "react";
import "../App.css";
import Axios from "axios";

class View extends Component {
  state = { data: [] };
  componentDidMount() {
    Axios.get("http://localhost:3001/hero").then((result) => {
      this.setState({ data: result.data });
      console.log(result);
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <React.Fragment>
        <h1>View</h1>
        <div className="view-container">
          {this.state.data.map((data) => {
            return (
              <div>
                <ul>
                  <li>
                    <img src={data.img} alt="hero" width="200" height="200" />
                  </li>
                  <li>Name = {data.name}</li>
                  <li>Age = {data.age}</li>
                  <li>Gender = {data.gender}</li>
                  <li>Hero Name = {data.hero_name}</li>
                  <li>Strength = {data.attributes.strength}</li>
                  <li>Speed = {data.attributes.speed} </li>
                  <li>HP = {data.attributes.hp} </li>
                  <li>Intelligence = {data.attributes.intelligence}</li>
                  <li>Agility = {data.attributes.agility}</li>
                  <li>Abilities = {data.attributes.abilities}</li>
                  <li>ID = {data._id} </li>
                </ul>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default View;
