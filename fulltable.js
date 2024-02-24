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
.then( () => client.query("insert into products values ($1, $2)",[5,"Xiaomi"]) )
.then( () => client.query("select * from products") )
.then( ({rows}) => console.table(rows) )
.catch( (e) => console.error(e) )
.finally( () => client.end() )