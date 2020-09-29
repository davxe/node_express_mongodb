Array.prototype.dctforEach=function(cb){
    for(let i=0;i<this.length;i++)
    {
        cb(this[i],i,this)
    }
}

const numbers=[10,20,30,40]

numbers.dctforEach(function(ele){
    console.log(ele)
})

const print =(ele)=>{
    console.log(ele)
}
numbers.dctforEach(print)