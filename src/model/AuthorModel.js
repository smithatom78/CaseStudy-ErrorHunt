const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://smithajacob:smithajacob@cluster0.1b8mq.mongodb.net/myFirstDatabase');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title: String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata', AuthorSchema);

module.exports = authordata;