import express from 'express'
import path from 'path'


let app = express();


// app.get('/',(req,resp)=>{

//   resp.send("Root req")

// })

// app.get('/user', (req,resp)=>{
//   resp.send('User Request')
// })

app.get('/', (req,resp)=>{

  resp.sendFile(path.join(process.cwd(),'staticWeb','html', 'index.html'))
})

app.get('/products', (req,resp)=>{
  resp.sendFile(path.join(process.cwd(),'staticWeb','html', 'products.html'))
})


app.get('/services', (req,resp)=>{
  resp.sendFile(path.join(process.cwd(), 'staticWeb','html','services.html'))
})

app.get('/user', (req, resp)=>{
  resp.sendFile(path.join(process.cwd(), 'staticWeb','html', 'user.html'))
})

app.get('/contact', (req, resp)=>{
  resp.sendFile(path.join(process.cwd(), 'staticWeb','html', 'contact.html'))
})

app.listen(8080, '127.0.0.1',(err)=>{

  if(err) throw err

  console.log(`Server is running on http://127.0.0.1:8080`)

})