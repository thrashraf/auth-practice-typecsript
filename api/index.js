const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const passportSetup = require('./passport');
const authRoute = require('./routes/auth');


const app = express()



app.use(cookieSession(
    {
        name: 'session',
        keys: ['thrashraf'],
        maxAge: new Date(Date.now() + (60*24*3600000))
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