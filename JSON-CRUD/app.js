import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import apiRouter from './Routes/apiRouter.js'
import chalk from 'chalk'

let app = express()
dotenv.config({'path':'./Config/dev.env'})

app.use(morgan('tiny'))


//Read Form data/post body data
app.use(express.json())

let port = process.env.PORT
let host = process.env.HOST

app.get('/', (req,resp)=>{
  return resp.json({"Msg":"Root request"})
})


app.use('/api', apiRouter);

app.listen(port, host, (err)=>{
  if(err) throw err
  console.log(chalk.bgGreen(`Server is running on - http://${host}:${port}/`))
})