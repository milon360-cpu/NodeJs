const express = require('express');
const router = express.Router();

router.use('/about',(req,res)=>
{
    // const id = req.query;
    // const name = req.query;
    const {id,name} = req.query;
    res.send(`<h1>ID:${id} Name:${name}</h1>`);
    res.sendStatus = 200;
    
})


module.exports = router;