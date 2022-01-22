const router = require('express').Router();
const { default: axios } = require('axios');

router.get('/games', (req, res) => {
    
    axios.get('https://www.freetogame.com/api/games?sort-by=popularity') 
        .then(result => {
            //console.log(result)
            res.json(result.data)
            
        })
        .catch(err => {
            console.log(err)
        })
})


router.get('/games/search/:id', (req, res) => {

    const id = req.params.id
    
    axios.get(`https://www.freetogame.com/api/game?id=${id}`) 
        .then(result => {
            //console.log(result)
            res.json(result.data)
            
        })
        .catch(err => {
            console.log(err)
        })
})


module.exports = router