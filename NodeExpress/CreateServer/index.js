const app = require('./app');
const PORT = 3005;

app.listen(PORT, ()=>
{
    console.log(`Server is Running at this Link http://localhost:${PORT}`);
})
