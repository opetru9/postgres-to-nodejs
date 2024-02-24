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
        await client.query("BEGIN")

        await client.query("insert into products values($1,$2)",["7", "Redmi"])

        const {rows} = await client.query("select * from products")
        console.table(rows)

        await client.query("COMMIT")
    }
    catch(e){
        console.error(e)
        await client.query("ROLLBACK")
    }
    finally{
        await client.end()
        console.log( "Client disconnected!!")
    }
}
