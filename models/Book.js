var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Bookschema = new Schema({
  title: {
    type: String,
    required: true,
  },

  authors: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("book", Bookschema);

module.exports = Book;
