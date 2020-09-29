// in react js and angular js we use ES6 module loader ti import-eg import React from 'react'
// in node js and express js we use common js module loader -eg require('http')

const http=require('http')
const port=3030
const server=http.createServer(function(req,res)
{
    if(req.url=='/')
    {
        res.end('welcome to the web site')
    }
    else if(req.url=='/users')
    {
        const users=[{id:1,name:'john'},{id:2,name:'jack'}]
        res.end(JSON.stringify(users))
    }
    else
    {
        res.end('the page you are looking for not there')
    }
})
server.listen(port,function()
{
    console.log('Listening on port',port)
})