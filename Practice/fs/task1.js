// Read users.json file in ES5 and ES6 format

const fs = require("fs");

fs.readFile('users.json', 'utf-8', (err, data)=>{
  if(err) throw err;
  let users=JSON.parse(data);

  for(let user of users){
    console.log(user.name)
  }

})
