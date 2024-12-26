import express from "express";
import path from "path"

let app = express()

//localhost:8080/
app.get("/",(req,resp)=>{
resp.send("Root request")
})

//localhost:8080/user
app.get("/user",(req,resp)=>{

  resp.send("User request")

})

app.get("/index", (req,resp)=>{
resp.sendFile(path.join(process.cwd(),"index.html"))
})




app.listen(8080,'127.0.0.1',(err)=>{
if(err) throw err
console.log(`Server is running on http://127.0.0.1:8080`)
})

