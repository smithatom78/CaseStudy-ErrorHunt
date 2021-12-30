const express = require('express');
const path = require('path');
const cors = require('cors');
const chalk = require('chalk');
const nav = [{
            link: "/books",
            title: "Books"
        },
        {
            link: "/authors",
            title: "Authors"
        },
        {
            link: "/addbook",
            title: "Add Book"
        },
        {
            link: "/addauthor",
            title: "Add Author"
        }
    ]
    // Part #1 Point 1,changed main as app.js in package.json
    // Part #1 Point 2,changed the dependencies  express-load": "^1.1.16" in package.json
const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter');
// Part #1 Point 3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express;


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));
//corrected by smitha jacob
// Part #1 Point 4
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/home', homeRouter);
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);



app.get('/', function(req, res) {

    res.render('index', {});

});



app.listen(5500, function() {
    console.log("Listening to port" + chalk.green(5500));
});
//creating a portnodemonapp.js