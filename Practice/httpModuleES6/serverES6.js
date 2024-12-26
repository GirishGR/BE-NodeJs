import http from 'http';

let server = http.createServer((req,resp)=>{

resp.end("Your Server is running on port 8080")
})

server.listen(8080, '127.0.0.1',(err)=>{
if(err) throw err

console.log("Server is running")

})