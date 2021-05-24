import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class Update extends Component {
  state = {
    id: 0,
    param: "",
    update: "",
  };

  // constructor(props) {
  //   super(props);
  //   this.attribute = "";
  // }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      [this.state.param]: this.state.update,
    };
    axios
      .put(`http://localhost:3001/hero/${this.state.id}`, { payload })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  render() {
    return (
      <form className="flex-container" onSubmit={this.handleSubmit}>
        <label>Hero ID:</label>
        <input type="text" name="id" onChange={this.handleChange} /> <br />
        <label>Attribute</label>
        <input type="text" name="param" onChange={this.handleChange} />
        <br />
        <label>New Value</label>
        <input type="text" name="update" onChange={this.handleChange} /> <br />
        <button type="submit">Update</button>
      </form>
    );
  }
}

export default Update;
