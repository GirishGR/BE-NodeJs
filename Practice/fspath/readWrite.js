const fs = require('fs');
const { json } = require('stream/consumers');

fs.readFile('users.json','utf-8', (err, data)=>{  
  if(err){
    console.log(`Unable to Read - : ${err.message}`)
  }else
  
  {
    console.log(data);
    
let users = JSON.parse(data);
    let male_Users = users.filter(user=>user.gender==='Male')
    let female_Users=users.filter(user=>user.gender==='Female')
    let other_Users=users.filter(user=>user.gender !=='Male' && user.gender !== 'Female')

    fs.writeFile('male.json', JSON.stringify(male_Users), (err)=>{
      if(err) throw err;
      console.log("Male file created")
    })

      fs.writeFile('female.json', JSON.stringify(female_Users), (err)=>{
        if(err) throw err
        console.log("Female file created")
      })

      fs.writeFile('OtherGender.json',JSON.stringify(other_Users), (err)=>{
        if(err) throw err
        console.log('Other file created')
      })
  }

})