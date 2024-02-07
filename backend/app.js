const { Console } = require('console')
const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/') res.end("welcome to our home page")
    if(req.url === '/about') res.end("here is the about section of our page")
    res.end(
        `<h1>4 04 : NOT FOUND </h1> 
        <p>OOPPS! There was an error</p> 
        <a href='/'> back home</a>`
    )
})



server.listen(5000)