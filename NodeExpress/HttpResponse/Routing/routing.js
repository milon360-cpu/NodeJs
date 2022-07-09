const express = require('express');
const router = express.Router();

router.get("/about",(req,res)=>
{
    res.send("<h1> This is About Page</h1>");
})
router.use('/login',(req,res)=>
{
    res.status(200).json({
        message:"Hi Whats up",
        statusCode: 200
    })
})
router.use('/register',(req,res)=>
{
    res.redirect('/login');
})
router.use('/contact',(req,res)=>
{
    res.statusCode = 200;
    res.sendFile(__dirname+'/htmlFiles/index.html');
})
router.use('/skill',(req,res)=>
{
    res.statusCode = 200;
    res.sendFile(__dirname +"/htmlFiles/index2.html");
    res.end();
})
router.use('/cookie',(req,res)=>
{
    res.cookie('name','Milon Mondal');
    res.cookie('ID','011201018');
    // res.clearCookie('name');
    res.append("name", "Milon");
    res.end();
    
})
module.exports = router;