const mongoose = require('mongoose');

const bookSchema = ({
    title: String,
    authorId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Author'
    },
    genreId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genre'
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;