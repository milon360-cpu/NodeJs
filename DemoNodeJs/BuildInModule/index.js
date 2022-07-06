const fs = require('fs');
const userName = "Milon";


// -----------Write File Here -------------
// fs.writeFile("mmt.text",userName,(error)=>
// {
//     if(error)
//       console.log('Not Successful');
//     else 
//       console.log("successful");
// })

// ----------------Append File----------------
// fs.appendFile("mmt.text",userName,(error)=>
// {
//     if(error)
//       console.log("file update not successful");
//     else 
//       console.log("file is updated");
// })


// ---------------Write File Here---------------------------- 

// fs.readFile('mmt.text','utf-8', (error,data)=>
// {
//     if(error)
//      console.log("Please Try Again Later");
//     else 
//      console.log(data);
// })

// fs.rename("mmt.text","mt.txt",(error)=>
// {
//     if(error)
//      console.log("name Change not Successful");
//     else 
//      console.log("Change Successful");
// })
//   ------------------Delete File ------------------
// fs.unlink('mmt.text',(error)=>
// {
//     if(error)
//       console.log("file delete not successful");
//     else 
//       console.log('successful');
// })

// existes File here but ist not working

// fs.exists('mt.txt',(error)=>
// {
//     if(error)
//       console.log("not found");
//     else 
//      console.log("find it");
// })