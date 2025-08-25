const express = require("express");
const Book = require("../model/book");

const router = express.Router();

// Create book (author)
router.post("/books", async (req, res) => {
  try {
    const { bookID, title, author } = req.body;
    const book = new Book({ bookID, title, author, status: "unpubliched" });
    await book.save();
    res.status(201).json({ message: "Book created", book });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all books (admin)
router.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get author’s own books
router.get("/my-books", async (req, res) => {
  const { author } = req.query;
  if (!author) return res.status(400).json({ message: "Author required" });
  const books = await Book.find({ author });
  res.json(books);
});

module.exports = router;
