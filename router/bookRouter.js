const express = require("express");
const Book = require("../model/book");

const router = express.Router();

router.post("/books", async (req, res) => {
  const { bookID, title, author } = req.body;
  const book = new Book({ bookID, title, author });
  await book.save();
  res.json({ message: "Book created", book });
});

router.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

module.exports = router;
