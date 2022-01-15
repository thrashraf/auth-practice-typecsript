const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const passportSetup = require('./passport');
const authRoute = require('./routes/auth');


const app = express()

const expiryDate = new Date(Date.now() + 60 * 60 * 1000)

app.use(cookieSession(
    {
        name: 'session',
        keys: ['thrashraf'],
        maxAge: expiryDate
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
        origin:"http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true
    })
);

app.use('/auth', authRoute)



app.listen('5000', (req, res) => {
    console.log('server run')
})