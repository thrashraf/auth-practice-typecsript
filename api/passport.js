const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = "131435089062-dqtt9a7t6814v7hmkvir6ru5992ijuum.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
const passport = require('passport');
const sql = require('./db');
const crypto = require('crypto');

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(req, accessToken, refreshToken, profile, done) {

   
    const id = crypto.randomBytes(16).toString("hex");
    

    sql.query(`SELECT * FROM users WHERE email = '${profile.emails[0].value}'`, (err, rows) => {

      if (rows.length) {
        //console.log('user already exist')

        const userProfile = {
          id: rows[0].id,
          username: rows[0].username,
          imageUrl: profile.photos[0].value
        }
        console.log(userProfile);
        done(null, userProfile)


      } else {
        
      console.log('create user')
      //! need to store id by crypto not the google id.
      //? create unique id
      

      sql.query(`INSERT INTO users ( id, role, username, email ) values ('${id}', 'user', '${profile.displayName}', '${profile.emails[0].value}')`, (err, rows) => {

        if (err) return console.log(err);


        const userProfile = {
          id: id,
          username: profile.displayName,
          imageUrl: profile.photos[0].value
        }

        console.log(userProfile);
        done(null, userProfile)
      })
    };

  })}
  
));


//* this gonna send the id to be a cookies to browser
passport.serializeUser((user, done) => {
    //console.log(user);
    done(null, user)
})

//* this gonna be the find the user by the id and send back user information
//? need to make find by id
passport.deserializeUser((user, done) => {
    
  sql.query(`SELECT * FROM users WHERE id = '${user.id}'`, (err, rows) => {

    if (err) return console.log(err);

    done(null, user)
  });

})