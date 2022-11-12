const mysql = require("mysql");

const conexion = mysql.createConnection({

host: "localhost",
user: "root",
password: "",
database: "crud_nodejs_db"

});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log("          Pagina Encendida")
})

module.exports = conexion