
#  SuperMorpheus-Wisdom-Nugget-API
Backend API service to manage "Wisdom Nuggets"

# Tech stack

Language:Javascript(Node.js)
Framework:Express.js
Database:MongoDB(Using Mongoose ODM)
Tools:dotenv,nodemon

Setup Instructions

1.Install MongoDb
  mongoDb Compass locally.

2.Install Dependecies
```bash
npm install express mongoose nodemon
npm install --save-dev dotenv
```

3.To run the project
``` bash  
npm run devStart
``` 
4.Create dotenv file in the root of your project and add:
``` bash
DATABASE_URL=mongodb://localhost/wisdomdb
```
5.Mongoose Schema Structure:
  The schema is defined in models/nugget.js
 ``` bash
 const mongoose=require('mongoose')

const nuggetSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model('nugget',nuggetSchema)
```
API Endpoints
1.GET/nuggets
  Url of endpoint: 
  ``` bash
  http://localhost:3000/nuggets/
```
  Output:Status:200 OK
  ``` bash {
    "text": "Nothing mattered much",
    "author": "Arundathi Roy",
    "_id": "67f3813ad0714371183203f2",
    "__v": 0
}
```

2.GET/nuggets/random
  Url of endpoint:
``` bash
http://localhost:3000/nuggets/random
```
  Output:Status:200:OK
``` bash
  {
    "_id": "67f3813ad0714371183203f2",
    "text": "Nothing mattered much",
    "author": "Arundathi Roy",
    "__v": 0
}
```
3.POST/nuggets
input in body json format:
``` bash
{
    "text": "To be or not to be, that is the question.",
    "author": " William Shakespeare"
}
```
Output:Status:201:created
``` bash
{
    "text": "To be or not to be, that is the question.",
    "author": " William Shakespeare",
    "_id": "67f38324d0714371183203f9",
    "__v": 0
}
```

4.DELETE/nuggets/{id}
Url endpoint:
``` bash
http://localhost:3000/nuggets/67f38324d0714371183203f9
```
Output:Status:200:OK
``` bash
{
    "message": "Deleted Nugget"
}
```






  







