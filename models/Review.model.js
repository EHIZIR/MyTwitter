const mongoose = require('mongoose');

const reviewSchema = ({
    reviewText: String,
    nameReviewer: String,
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book'
    }

});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review