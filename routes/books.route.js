const { Router } = require('express');

const router = Router();

const {booksController} = require('../controllers/books.controller');

router.post('/books', booksController.createBook);
router.delete('/books', booksController.deleteBook);
router.patch('/books/:id', booksController.updateBookById);
router.get('/books', booksController.getBook);
router.get('books/:id', booksController.getBookById);
router.get('/books/genre/:id', booksController.getBookByGenre);

module.exports = router;