require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/name",(req,res)=>{
    res.send("hiii my name is manish")
})
app.get("/login",(req,res)=>{
    res.send("<h1>thanks for login</h1>")
})
app.get("/social",(req,res)=>{
    res.send("<h2>insta id:manish__109</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})