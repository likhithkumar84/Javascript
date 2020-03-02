const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/personData.html"))
);

const Datastore = require("nedb");
const database = new Datastore("PersonDetails.db");
database.loadDatabase();

app.use(express.urlencoded({ extended: false }));
app.post("/persons", (req, res) => {
  const data = {
    Name: req.body.Name,
    Email: req.body.Email,
    Mobile: req.body.Mobile
  };
  database.insert(data, (err, details) => res.send(details));
});

app.get("/persons", (req, res) => {
  const query = req.query;
  database.find(query, (err, personDetails) => res.json(personDetails));
});

app.delete("/persons/:id", (req, res) => {
  const id = { _id: req.params.id };
  database.remove(id, (err, personRemoved) => {
    res.end("person deleted");
  });
});

app.patch("/persons/:id/:mobile", (req, res) => {
  const iD = { _id: req.params.id };
  const number = req.params.mobile;
  database.update(
    iD,
    { $set: { Mobile: number } },
    { multi: true },
    (err, updated) => {
      res.send("updated");
    }
  );
});

app.listen(5000, () => console.log("app listening at 5000 "));
