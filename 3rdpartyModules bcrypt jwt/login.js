import bcrypt from 'bcrypt'


let user = {
  'userName': 'Girish',
  'userEmail': 'girishsyam@gmail.com',
  'userPassword': 'SyamVictor123#',
  'userCC': '1234567890123467',
  'userCVV': '456'
}

let name = 'NannaHesaruGirish';

console.log(user)

let salt = bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(user.userPassword, salt);
let newUserCC = bcrypt.hashSync(user.userCC, salt);
let newUserCVV = bcrypt.hashSync(user.userCVV, salt);
let newName = bcrypt.hashSync(name, salt);


user = {
  ...user, userPassword:newPassword, userCC:newUserCC, userCVV:newUserCVV, name:newName
}

console.log(user);

let compare = bcrypt.compare('SyamVictor123#', user.userPassword);

if(compare){
  console.log("Login successful")

}else{
  console.log("Login failed")
}
