const router = require('express').Router();
const passport = require('passport')



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
        message: 'fail to login'
    });
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3000')
})

router.get('/google', passport.authenticate('google', {scope: ["profile"]}))

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: 'login/fail'
}))

module.exports = router