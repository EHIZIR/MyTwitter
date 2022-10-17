const mongoose = require('mongoose');

const authorSchema = ({
    name: String,
    info: String
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;