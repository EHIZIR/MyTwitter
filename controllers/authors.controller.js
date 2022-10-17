const Author = require('../models/Author.model');

module.exports.authorsController = {

    createAuthor: (req, res) => {
        const { name, info } = req.body;
        Author.create(
            {
                name,
                info
            },
            (err, data) => {
                res.json(data)
            }
        )
    }
}