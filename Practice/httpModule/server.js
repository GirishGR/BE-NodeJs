const http= require('http')


let server = http.createServer((req, resp)=>{

  resp.end("Your server is running.!!")
})

server.listen(8080,"127.0.0.1", (err)=>{
  if(err) throw err
  console.log('Server is running')
})
