const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth');
const gameRoute = require('./routes/games');
require('./passport');


const app = express()

app.use(cookieSession(
    {
        name: 'session',
        keys: ['cdnmckldsamckdsams'],
        maxAge:  365 * 24 * 60 * 60 * 1000
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({
        origin:"http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true
    })
);

app.use('/auth', authRoute);
app.use('/game', gameRoute);



app.listen('5000', (req, res) => {
    console.log('server run')
})