import express from 'express'
import dotenv from 'dotenv'


const app = express()


//Load config values /environment values

dotenv.config({'path':'./config/dev.env'})
let port = process.env.PORT;
let host = process.env.HOSTNAME;
let Message = process.env.MESSAGE

app.get('/user',(req,resp)=>{
  // return resp.json({"Msg": `${Message}`})
  return resp.json({"Msg": `GET METHOD`})
})

app.listen(port,host, (err)=>{
if(err) throw err
console.log(`Server is running on: http://${host}:${port}/ `)

})

