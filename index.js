const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database");

const userRouter = require("./router/userRouter");
const bookRouter = require("./router/bookRouter");

const app = express();
app.use(express.json());

connectDB();

app.use(userRouter);
app.use(bookRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
