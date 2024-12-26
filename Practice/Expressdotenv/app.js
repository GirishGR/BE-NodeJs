import express from 'express'
import dotenv from 'dotenv'

let app = express()

//Load config values /environment values
dotenv.config({'path':'./Config/dev.env'})

let port = process.env.PORT
let host = process.env.HOSTNAME
let message=process.env.MESSAGE

app.get('/user',(req,resp)=>{
  return resp.json({'msg':`${message}`})
})

app.get('/',(req,resp)=>{
      resp.send("Index Request")
})

app.put('/', (req,resp)=>{
  return resp.json({'msg':'Products request - PUT Request'})
})

app.post('/', (req,resp)=>{
  return resp.json({'msg':'Products request - POST Request'})
})

app.delete('/', (req,resp)=>{
  return resp.json({'msg':'Products request - DELETE Request'})
})

app.listen(port,host,(err)=>{
if(err) throw err
console.log(`Server is running on http://${host}:${port}/`)
})