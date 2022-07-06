const express = require('express');
const router = express.Router();

router.get("/about",(req,res)=>
{
    res.send("Hi I'm Post Response")
    res.end();
})
router.get("/contact",(req,res)=>
{
    res.send(" I'm a Contact page ");
    res.end();
})
module.exports = router;