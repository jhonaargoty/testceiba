const express = require ('express');
const app = express();


app.use(express.json());



app.use (require('./routes/arrendamientos'))





app.listen(8084,  ()=> {
    console.log("server on port 8084")
})