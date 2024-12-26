import http from 'http'

const server = http.createServer((req, resp)=>{

  resp.end("Server is running")

})


server.listen(8080,'127.0.0.1', (err) => {
  if(err) throw err

  console.log("Listening to server")

})