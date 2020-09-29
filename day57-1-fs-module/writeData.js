const fs=require('fs')
const data=JSON.stringify([{"name":"jack"},{"name":"john"}])
fs.writeFile('./data2.json',data,()=>{
    console.log('written to file')
})