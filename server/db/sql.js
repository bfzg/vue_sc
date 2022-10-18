const mysql = require('mysql');
let  connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"200312",
    database:'vuestore'
})
    module.exports=connection;
