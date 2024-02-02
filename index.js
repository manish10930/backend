require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
  "login": "manish10930",
  "id": 69040187,
  "node_id": "MDQ6VXNlcjY5MDQwMTg3",
  "avatar_url": "https://avatars.githubusercontent.com/u/69040187?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/manish10930",
  "html_url": "https://github.com/manish10930",
  "followers_url": "https://api.github.com/users/manish10930/followers",
  "following_url": "https://api.github.com/users/manish10930/following{/other_user}",
  "gists_url": "https://api.github.com/users/manish10930/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/manish10930/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/manish10930/subscriptions",
  "organizations_url": "https://api.github.com/users/manish10930/orgs",
  "repos_url": "https://api.github.com/users/manish10930/repos",
  "events_url": "https://api.github.com/users/manish10930/events{/privacy}",
  "received_events_url": "https://api.github.com/users/manish10930/received_events",
  "type": "User",
  "site_admin": false,
  "name": "manish kumar",
  "company": "na",
  "blog": "",
  "location": "Muzaffarpur,bihar,india",
  "email": null,
  "hireable": null,
  "bio": "Experienced in C, C++, HTML, CSS, JavaScript, React JS, Bootstrap, and Python with a B.Tech in Computer Science and Engineering. Adept at working under pressure",
  "twitter_username": "Manishk00538486",
  "public_repos": 18,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2020-07-31T11:24:32Z",
  "updated_at": "2024-01-22T05:32:19Z"
}
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

app.get("/github",(req,res)=>{
  res.send(githubData)
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})