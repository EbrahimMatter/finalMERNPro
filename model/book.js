const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  bookID: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: {
    type: String,
    enum: ["published", "unpubliched"],
    default: "unpubliched",
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
