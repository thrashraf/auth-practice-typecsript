const router = require('express').Router();
const passport = require('passport')
const sql = require('../db');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const saltRounds = 10

router.get('/login/success', (req, res) => {

    if (req.user) {

        res.status(200).json({
            success: true,
            message: 'successful',
            user: req.user,
            // cookies: req.cookies
        });
    }

})

router.get('/login/fail', (req, res) => {
    res.status(401).json({
        success: false,
        redirect: '/login',
        message: 'fail to login'
    });
})

router.get("/logout", (req, res) => {
    
    req.logout();
    res.redirect('http://localhost:3000');
  });

router.get('/google', passport.authenticate('google', {scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
]}))

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: 'login/fail'
}))


router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback', passport.authenticate('github', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: 'login/fail'
}))

router.post('/signup',(req, res) => {
    const {username, email, password} = req.body

    const id = crypto.randomBytes(16).toString("hex");

    if (password.length < 8) return res.status(400).send({error: 'password minimum 8 length'})

    const hash = bcrypt.hashSync(password, saltRounds);

    sql.query(`SELECT * FROM users WHERE username = '${username}'`, (err, rows) => {

                if (rows.length) {
                  console.log('user already exist')
        
                  const userProfile = {
                    id: rows[0].id,
                    username: rows[0].username,
                    
                  }

                  res.json({message: 'user already exist, please sign in'})
                  console.log(userProfile);

                  //done(null, userProfile)
        
        
                } else {
                  
                console.log('create user')
                //! need to store id by crypto not the google id.
        
        
                sql.query(`INSERT INTO users ( id, role, username, email, password ) values ('${id}', 'user', '${username}', '${email}', '${hash}')`, (err, rows) => {
            
                    if (err) return console.log(err);
            
                    const userProfile = {
                        id: id,
                        username: username,
                        
                    }
                        
                });
        }
    });
        
});

module.exports = router