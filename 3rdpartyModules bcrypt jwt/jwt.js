import jwt from 'jsonwebtoken'


let payload = {

  'userName':'Girish G R',
  'userPassword':'SyamVictor123#'
}

//Token creation
let token = jwt.sign(payload,'Better luck next time') //BLNT is secret code
console.log(token)


//Verify token

let new_Payload = jwt.verify(token,  'Better luck next time');

console.log(new_Payload);