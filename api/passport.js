const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const localStrategy = require('passport-local').Strategy;

const GOOGLE_CLIENT_ID = "131435089062-dqtt9a7t6814v7hmkvir6ru5992ijuum.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "bf3ba94b2b8dc8653b43";
const GITHUB_CLIENT_SECRET = "ea6b51bdf3508c6bdb06ebebada5a26ce3cc7482";

const passport = require('passport');
const sql = require('./db');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');


// ? ================= PASSPORT GOOGLE ===========================

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


// ? ================= PASSPORT GITHUB ===========================

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/callback"
  },
  function(req, accessToken, refreshToken, profile, done) {

   console.log(profile);
    const id = crypto.randomBytes(16).toString("hex");
    

    sql.query(`SELECT * FROM users WHERE id = '${profile.id}'`, (err, rows) => {

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
      

      sql.query(`INSERT INTO users ( id, role, username, email ) values ('${profile.id}', 'user', '${profile.displayName}', '${profile._json.email}')`, (err, rows) => {

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





passport.use(new localStrategy ({

  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
 

}, 
  (req, username, password, done) => {

    
    sql.query(`SELECT * FROM users WHERE username = '${username}'`, (err, rows) => {
      
      if (rows.length) {
        //console.log('user already exist')

        const userProfile = {
          id: rows[0].id,
          username: rows[0].username
        }

        const userPassword = rows[0].password;
        //console.log(userPassword);

        if (bcrypt.compareSync(password, userPassword)) {
          console.log('correct pass');
          return done(null, userProfile)
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }        
        
      } else {
        return done(null, false, { message: 'Incorrect password.' });
    
      }

    });
    
  })
)




//* this gonna send the id to be a cookies to browser
passport.serializeUser((user, done) => {
    //console.log(user);
    done(null, user)
})

//* this gonna be the find the user by the id and send back user information
//? need to make find by id
passport.deserializeUser((user, done) => {

  console.log(user);
    
  sql.query(`SELECT * FROM users WHERE id = '${user.id}'`, (err, rows) => {
    console.log('lol');
    if (err) return console.log(err);

    done(null, user)
  });

})