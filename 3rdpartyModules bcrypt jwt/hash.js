import bcrypt from 'bcrypt'

let user ={
  'name':'Girish',
  'email':'girish@gmail.com',
  'cc': '1234567890123467',
  'cvv':'1234'
}

let salt= bcrypt.genSaltSync(10); // 10 means how strong your translated data should be

let new_CC = bcrypt.hashSync(user.cc, salt)
let new_cvv = bcrypt.hashSync(user.cvv, salt)


console.log(user);
console.log(user.cc);
console.log("Hashed CC number:-", new_CC);
console.log("Hashed CVV number:-",new_cvv)

user ={
  ...user, cc:new_CC, cvv:new_cvv
}


let flag = bcrypt.compareSync('1234567890123467', user.cc)

if(flag){
  console.log("Login Successful")

}else{
  console.log("Login failed")
}

console.log(user)



// To compare bcrypt data with string entered - bcrypt.compare