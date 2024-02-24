const {Client} = require("pg")
const  client  = new Client ({
    user:"postgres",
    password:"swat",
    host:"localhost",
    port:5432,
    database:"e_shop"
})
execute()
async function execute(){
    try{
        await client.connect()
        console.log( "succes connect!!")
    
        const {rows} = await client.query("select * from products")
        console.table(rows)
    }
    catch(e){
        console.error(e)
    }
    finally{
        await client.end()
        console.log( "Client disconnected!!")
    }
}