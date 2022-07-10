const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get('/registration',(req,res)=>
{
    res.sendFile(__dirname+'/index.html');

})
router.post('/registration',(req,res)=>
{
    const name = req.body.username;
    const id = req.body.id;
    res.send(`Name:${name} and ID : ${id}`);
})

module.exports = router;