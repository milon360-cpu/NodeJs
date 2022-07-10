const express = require('express');
const router = express.Router();

router.get('/about',(req,res)=>
{
    // const id = req.query.id;
    // const name = req.query.name;
    const {id,name} = req.query;
    res.send(`<h1> Hello I'm About Router and ID: ${id} and Name: ${name}</h1>`);
   
})



module.exports = router;