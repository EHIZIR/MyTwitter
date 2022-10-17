const { Router } = require('express');

const router = Router();

const {reviewsController} = require('../controllers/reviews.controller');

router.post('/review', reviewsController.createReview);
router.delete('/review', reviewsController.deleteReview);
router.get('/review/book/:id', reviewsController.getReviewByBook);

module.exports = router;