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
        credentials: true,
        optionsSuccessStatus: 200

    })
);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  




app.use('/auth', authRoute);
app.use('/game', gameRoute);



app.listen('5000', (req, res) => {
    console.log('server run')
})