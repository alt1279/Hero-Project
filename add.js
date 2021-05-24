import React, { Component } from "react";
import "../App.css";
import axios from "axios";
class Add extends Component {
  state = {
    name: "",
    hero_name: "",
    age: 0,
    gender: "",
    img: "",
    description: "",
    speed: 0,
    strength: 0,
    hp: 0,
    intelligence: 0,
    agility: 0,
    abilities: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit successful");

    const hero = {
      name: this.state.name,
      hero_name: this.state.hero_name,
      age: this.state.age,
      gender: this.state.gender,
      img: this.state.img,
      description: this.state.description,
      attributes: {
        speed: this.state.speed,
        strength: this.state.strength,
        hp: this.state.hp,
        intelligence: this.state.intelligence,
        agility: this.state.agility,
        abilities: this.state.abilities,
      },
    };
    console.log({ hero });

    axios.post("http://localhost:3001/hero", { hero }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <h1>Add</h1>
        <form className="flex-container" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <br />
          <label>Hero Name:</label>
          <input type="text" name="hero_name" onChange={this.handleChange} />
          <br />
          <label>Age:</label>
          <input type="text" name="age" onChange={this.handleChange} />
          <br />
          <label>Gender:</label>
          <input type="text" name="gender" onChange={this.handleChange} />
          <br />
          <label>Image URL:</label>
          <input
            placeholder="optional"
            name="img"
            onChange={this.handleChange}
          />{" "}
          <br />
          <label>Description</label>
          <input placeholder="optional" name="description" /> <br />
          <label>Attributes</label>
          <input
            type="text"
            placeholder="Speed"
            name="speed"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Strength"
            name="strength"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="HP"
            name="hp"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Intelligence"
            name="intelligence"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Agility"
            name="agility"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Abilities"
            name="abilities"
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Add;
