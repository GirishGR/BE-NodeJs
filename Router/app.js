import express from 'express'
import dotenv from 'dotenv'
import userRouter from './Routes//userRouter.js'
import productRouter from './Routes//productRouter.js'

let app = express()

dotenv.config({'path':'./Config/dev.env'})

let port = process.env.PORT
let host = process.env.HOSTNAME
let message = process.env.message


//Dummy API - http://127.0.0.1:8080

app.get('/',(req,resp)=>{

return resp.json({"msg":`${message}`})

})


app.use('/user', userRouter);



app.use('/products', productRouter);





app.listen(port, host,(err)=>{

  if(err) throw err
  console.log(`Server running on : http://${host}:${port}/`)

})