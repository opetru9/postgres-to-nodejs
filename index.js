const {Client} = require("pg")
const  client  = new Client ({
    user:"postgres",
    password:"swat",
    host:"localhost",
    port:5432,
    database:"e_shop"
})

client.connect()
.then( () => console.log( "succes connect!!") )
.then( () => client.query("select * from products where name = $1 ",["Samsung"]) )
.then( ({rows}) => console.table(rows) )
.catch( (e) => console.error(e) )
.finally( () => client.end() )