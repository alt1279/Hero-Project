import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class Search extends Component {
  state = {
    id: 0,
    data: null,
  };

  handleIDChange = (e) => {
    this.setState({ id: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`http://localhost:3001/searchHero/${this.state.id}`)
      .then((res) => {
        //console.log(res);
        this.setState({ data: res.data });
      });
    console.log(this.data);
  };

  searchView = () => {
    return (
      <div>
        <ul>
          <li>
            <img
              src={this.state.data.img}
              alt="hero"
              width="200"
              height="200"
            />
          </li>
          <li>Name = {this.state.data.name}</li>
          <li>Age = {this.state.data.age}</li>
          <li>Gender = {this.state.data.gender}</li>
          <li>Hero Name = {this.state.data.hero_name}</li>
          <li>Strength = {this.state.data.attributes.strength}</li>
          <li>Speed = {this.state.data.attributes.speed} </li>
          <li>HP = {this.state.data.attributes.hp} </li>
          <li>Intelligence = {this.state.data.attributes.intelligence}</li>
          <li>Agility = {this.state.data.attributes.agility}</li>
          <li>Abilities = {this.state.data.attributes.abilities}</li>
          <li>ID = {this.state.data._id} </li>
        </ul>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <form className="flex-container">
          <input
            value={this.state.id}
            onChange={this.handleIDChange}
            type="text"
            name="searchBar"
          />
          <button type="submit" onClick={this.handleSubmit}>
            Search
          </button>
        </form>
        {this.state.data && this.searchView()}
      </React.Fragment>
    );
  }
}

export default Search;
