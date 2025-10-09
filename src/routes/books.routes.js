import express from "express";
import * as controller from "../controllers/books.controller.js";

const router = express.Router();

router.get("/", controller.GetBooks);

router.get("/:id", controller.GetBookById);

router.post("/book", controller.AddBook);

router.delete("/:id", controller.DeleteBookById);

export default router;
