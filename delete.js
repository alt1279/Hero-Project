import React, { Component } from "react";
import "../App.css";
import Axios from "axios";

class Delete extends Component {
  state = {
    id: 0,
  };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
    console.log(`change successful ${this.state.id} `);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    Axios.delete(`http://localhost:3001/hero/${this.state.id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form className="flex-container" onSubmit={this.handleSubmit}>
        <label>Hero ID:</label>
        <input type="text" name="id" onChange={this.handleChange} /> <br />
        <button type="submit">Delete</button>
      </form>
    );
  }
}

export default Delete;
