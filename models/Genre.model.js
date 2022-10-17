const mongoose = require('mongoose');

const genreSchema = ({
    title: String,
    description: String
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;