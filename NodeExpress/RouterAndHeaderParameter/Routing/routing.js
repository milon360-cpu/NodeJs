const express = require('express');
const router = express.Router();

router.get('/about',(req,res)=>
{
    res.send("this is about Page");
})
router.get('/userId/:id/userAddress/:address',(req,res)=>
{
    // routing perameter 
    const id = req.params.id;
    const address = req.params.address;
    req.statusCode = 200;
    res.send(`${id} and ${address}`);
})
router.use('/contact',(req,res)=>
{
    const id = req.header('id');
    const name = req.header('name');
    res.send(`Name : ${name}  and ID: ${id}`);
})
module.exports = router;