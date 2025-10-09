import books from "../Db/booksDb.js";

export const GetBooks = (req, res) => {
  return res.status(200).json(books);
};

export const GetBookById = (req, res) => {
  const id = parseInt(req.params?.id);
  const book = books.find((b) => parseInt(b.id) === id);

  if (!book) {
    return res.status(404).send(`Book with id:${id} not found`);
  }
  return res.status(200).send(book);
};

export const AddBook = (req, res) => {
  const { title, author } = req.body;

  if (!title || title == "") {
    return res.status(400).send("Title is required");
  }

  if (!author || author == "") {
    return res.status(400).send("Author is required");
  }

  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);

  return res.status(201).send("Created");
};

export const DeleteBookById = (req, res) => {
  const id = parseInt(req.params.id);

  const idx = books.findIndex((b) => parseInt(b.id) === id);

  if (idx < 0) {
    return res.status(404).send(`Book with id: ${id} not found to delete`);
  }

  books.splice(idx, 1);

  return res.status(200).send("Deleted");
};
