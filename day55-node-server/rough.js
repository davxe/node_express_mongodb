// const http=require('http')
// const port=3045
// const server=http.createServer((req,res)=>{
//     if(req.url=='/')
//     {
//         res.end('welcome to website')
//     }
//     else if(req.url=='/users')
//     {
//         const user=[{id:1,name:'john'},{id:2,name:'jack'},{id:3,name:'jacky'}]
//         res.end(JSON.stringify(user))
//     }
//     else
//     {
//         res.end('url is not correct')
//     }
// })
// server.listen(port,()=>{
//     console.log('listening port',port)
// })
const url='localhost:3040'
console.log(match.params)