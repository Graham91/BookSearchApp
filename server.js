const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect("mongodb://localhost/books_db");
var db = require("./models/Book");
// Define API routes here

app.get("/api/sendData", function (req, res) {
  db.find({}, function (err, data) {
    console.log(data);
    res.json(data);
  });
});

app.put("/api/add", function (req, res) {
  db.create(req.body)
    .then(function (book) {
      // View the added result in the console
      console.log(book);
    })
    .catch(function (err) {
      // If an error occurred, log it
      console.log(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
