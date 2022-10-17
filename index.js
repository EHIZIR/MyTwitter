const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(require('./routes'));

mongoose.connect("mongodb+srv://into:code@cluster0.bftnaod.mongodb.net/book?retryWrites=true&w=majority", 
(err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected')
    }
}
);

app.listen(3006, () => {
    console.log('порт подключен')
});