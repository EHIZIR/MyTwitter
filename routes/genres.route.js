const { Router } = require('express');

const router = Router();

const {genresController} = require('../controllers/genres.controller');

router.post('/genre', genresController.createGenre);
router.delete('/genre', genresController.deleteGenre);
router.get('/genre', genresController.getGenre);
 
module.exports = router;