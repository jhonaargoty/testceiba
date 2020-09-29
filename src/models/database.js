const mysql =  require ('mysql');

const mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user: 'ceiba',
    password: 'ceiba', 
    database:'pruebaingresoceiba'
})

mysqlConnection.connect(function(err){

     if(err){
         console.log(err);
         return;
     }else{
        console.log("conectado a db");
     }
});

module.exports = mysqlConnection;