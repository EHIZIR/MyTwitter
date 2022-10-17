const Review = require('../models/Review.model');

module.exports.reviewsController = {
    createReview: (req, res) => {
        const {reviewText, nameReviewer, bookId} = req.body;
        Review.create(
            {
                reviewText, 
                nameReviewer, 
                bookId
            },
            (err, data) => {
                res.json(data)
            }
        )
    },
    deleteReview: (req, res) => {
        Review.remove(
            {
            nameReviewer: req.body.nameReviewer
            },
            (err, data) => {
                res.json(data)
            }
        )
    },
    getReviewByBook: (req, res) => {
        Review.find({book: req.params.id}, (err, data) => {
            res.json(data)
        })
    }
}