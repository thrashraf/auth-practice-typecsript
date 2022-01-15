const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = "131435089062-dqtt9a7t6814v7hmkvir6ru5992ijuum.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
const passport = require('passport');
const sql = require('./db');

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(req, accessToken, refreshToken, profile, done) {

    const userProfile = {
      username: profile.displayName,
      imageUrl: profile.photos[0].value
    }

    sql.query(`SELECT * FROM users WHERE email = '${profile.emails[0].value}'`, (err, rows) => {

      if (rows.length) {
        console.log('user already exist')
        done(null, userProfile)
      } else {
        
      console.log('create user')
      sql.query(`INSERT INTO users ( id, role, username, email ) values ('${profile.id}', 'user', '${profile.displayName}', '${profile.emails[0].value}')`, (err, user) => {

        if (err) {
          console.log(err)
        }
        done(null, userProfile)
      })
    };

  })}
  
));

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})