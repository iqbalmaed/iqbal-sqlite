const express = require("express")
const app = express()
const db = require("./src/index")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const dir_url = "C:/arkademy/iqbal-sqlite/"

// make server start
app.listen(3000, () => {
  console.log("on... 3000")
})

app.use(express.static(__dirname + '/../public/')); // for static file in folder public

// default endpoint
app.get("/",(req,res,next) => {
  res.sendfile("index.html")
})



// endpoint for rest api
// get all data
app.get("/contacts",(req,res,next) => {

  const sql = 'select * from contacts'
  db.all(sql, (err, data) => {  
      if (err)  res.json({"error":err.message});
 
      res.json({
        "data":data
    })
    });
})
