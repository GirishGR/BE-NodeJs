import http from 'http'
import fs from 'fs'

let server= http.createServer((req,response)=>{

fs.readFile('index.html','utf-8',(err, data)=>{
if(err) throw err

if(req.url=='/'){
  response.end(data)
}else if(req.url=='/about'){
  response.end('This is about page')
}
})

})

server.listen(8080, '127.0.0.1', (err)=>{

  if(err) throw err

  console.log("Server is running")

})