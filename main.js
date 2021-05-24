const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3001;
const mongoose = require("mongoose");
const Hero = require("./hero.js");
const cors = require("cors");
app.use(cors());
const testData = require("./testData.json");

const startServer = () => {
  app.get("/", (req, res) => res.send("hello world"));

  app.get("/hero", (req, res) => {
    Hero.find()
      .then((results) => {
        res.send(results);
      })
      .catch((err) => status(404).send({ error: err }));
  });
  // app.get("/searchHero/:_id", (req, res) => {
  //   Hero.findById({ _id: req.params._id })
  //     .then((results) => {
  //       res.send(results);
  // })
  app.get("/searchHero/:_id", (req, res) => {
    console.log(req.params._id);
    Hero.findById({ _id: req.params._id })
      .then((result) => {
        res.send(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({ error: err });
      });
  });

  app.post("/hero", (req, res) => {
    let h = new Hero({ ...req.body.hero });
    console.log(req.body);
    h.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({ error: err });
      });
  });
  app.put("/hero/:_id", (req, res) => {
    console.log(req.body.payload);
    Hero.findByIdAndUpdate(
      req.params._id,
      { ...req.body.payload },
      {
        new: true,
      },
      () => {
        console.log("it works");
      }
    )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        //console.log(err);
        //console.log({ ...req.body.hero });
        res.status(404).send({ error: err });
      });
  });
  app.delete("/hero/:_id", (req, res) => {
    Hero.findByIdAndDelete({ _id: req.params._id })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(404).send({ error: err });
      });
  });

  app.listen(port, () => {
    console.log(`hero app listening at ${port}`);
  });
};

const mongoose_config = {
  url: "mongodb://localhost/heroes",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
};
mongoose
  .connect(mongoose_config.url, mongoose_config.options)
  .then((result) => {
    console.log(
      `MongoDB- 
            \r  Host : ${result.connections[0].host}  
            \r  Port : ${result.connections[0].port}  
            \r  DB   : ${result.connections[0].name}`
    );

    // let h = new Hero({name: 'Thomas Wayne', hero_name: 'Batman', age: 24, gender: 'male'})
    // console.log(h)
    // h.save()

    startServer();
  })
  .catch((err) => {
    console.log(err);
  });
