const mongoose = require("mongoose");

let heroSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hero_name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      //required: true
    },
    desc: {
      type: String,
      //required: true
    },
    attributes: {
      speed: String,
      strength: String,
      hp: String,
      intelligence: String,
      agility: String,
      abilities: [],
      //required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hero", heroSchema);
