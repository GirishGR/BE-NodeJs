import express from 'express'

let router = express.Router()


router.get('/', (req,resp)=>{
  return resp.json({'Msg':'Products - GET REQUEST '})
})


router.post('/create', (req,resp)=>{
  return resp.json({'Msg':'Products - CREATE REQUEST'})
})


router.put('/update', (req,resp)=>{
  return resp.json({'Msg':'Products - UPDATE REQUEST'})
})


router.delete('/delete', (req,resp)=>{
  return resp.json({'Msg':'Products - DELETE REQUEST'})
})


export default router;



