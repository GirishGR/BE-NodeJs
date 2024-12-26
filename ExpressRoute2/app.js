import express from 'express'
import path from 'path'

const app = express()


/*
API URL:http://127.0.0.1:8080/
Method Type:GET
Required Fields:None
Access Type:Public
*/

app.get('/',(req, resp)=>{

  resp.send("Hello There")

})

/*
POST API
API URL: http://127.0.0.1:8080/
Method Type:POST
Required Fields:None
Access Type:Public

*/

app.post('/', (req,resp)=>{
resp.send("Create Request - POST METHOD")
})


/*
API URL: http://127.0.0.1:8080/
Method Type:PUT
Required Fields:None
Access Type:Public
*/

app.put('/', (req,resp)=>{
return resp.json({"Message":"Update Request - PUT METHOD"})
})

/*
API URL:http://127.0.0.1:8080/delete
Method Type:DELETE
Required Fields:None
Access Type: Public
*/


app.delete('/', (req,resp)=>{
  return resp.json({"Message":"Delete Request - DELETE METHOD"})
})

app.listen(8080,'127.0.0.1', (err)=>{
if(err) throw err

console.log(`Server is running on - http://127.0.0.1:8080/`)

})