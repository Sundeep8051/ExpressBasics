import express from "express";
import booksRouter from "./routes/books.routes.js";
import logger from "./middlewares/logger.js";

const app = express();
app.use(express.json());
const port = 3000;

// Middlewares
app.use(logger);

// Routes
app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
