const Genre = require('../models/Genre.model');

module.exports.genresController = {

    createGenre: (req, res) => {
        const { title, description } = req.body;
        Genre.create(
            {
                title,
                description
            },
            (err, data) => {
                res.json(data)
            }
        )
    },

    deleteGenre: (req, res) => {
        Genre.remove(
            {
                title: req.body.title
            },
            (err, data) => {
                res.json(data)
            }
        )
    },

    getGenre: (req, res) => {
        Genre.find({}, (err, data) => {
            res.json(data)
        })
    }
}