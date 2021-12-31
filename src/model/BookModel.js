const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://smithajacob:smithajacob@cluster0.1b8mq.mongodb.net/myFirstDatabase', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata', BookSchema);

module.exports = bookdata;