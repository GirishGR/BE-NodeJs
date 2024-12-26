import express from 'express'

let router = express.Router()

/*
API-1
URL : http://127.0.0.1:8080/user/
Method:GET
Required Fields:None 
Access Type:Public 
*/

router.get('/', (req,resp)=>{
  return resp.json({"msg":"User rooter request"})
})


/*
API-3
URL : http://127.0.0.1:8080/user/create/
Method:POST
Required Fields:None 
Access Type:Public 
*/

router.post('/create', (req,resp)=>{
  return resp.json({"Msg":"POST METHOD"})

})


/*
API-2
URL : http://127.0.0.1:8080/user/update/
Method:PUT
Required Fields:None 
Access Type:Public 
*/

router.put('/update', (req,resp)=>{
  return resp.json({"Msg":"Update Method"})
})


/*
URL : http://127.0.0.1:8080/user/delete
Method:DELETE
Required Fields:None 
Access Type:Public
*/

router.delete('/delete',(req,resp)=>{
return resp.json({"Msg":"Delete Method"})
  
})

export default router;
