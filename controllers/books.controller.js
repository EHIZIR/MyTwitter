const Book = require('../models/Book.model');

module.exports.booksController = {

    createBook: (req, res) => {
        const { title, authorId, genreId } = req.body;
        Book.create(
            {
                title,
                authorId,
                genreId,
            }, (err, data) => {
                res.json(data)
            }
        )
    },
    deleteBook: (req, res) => {
        Book.remove(
            {
                title: req.body.title
            },
            (err, data) => {
                res.json(data)
            }
        )
    },
    updateBookById: (req, res) => {
        const { title, authorId, genreId, } = req.body;
        Book.updateOne(req.params.id,
            {
                title,
                authorId,
                genreId,
            }, (err, data) => {
                res.json(data)
            }

        )
    },
    getBook: (req, res) => {
        Book.find({}, (err, data) => {
            res.json(data)
        }).populate('authorId',).populate('genreId')
    },
    getBookById: (req, res) => {
        Book.findById(req.body.id, (err, data) => {
            res.json(data)
        }).populate('authorId',).populate('genreId')
    },
    getBookByGenre: (req, res) => {
        Book.find({ genreId: req.params.id }, (err, data) => {
            res.json(data)
        }).populate('authorId',).populate('genreId')
    }
}
