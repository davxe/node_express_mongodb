// es6 feature - handling asynchronous js 
/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// asynchronous operation
front end 
    network operations 
    axios.get(url)
        .then(function(response){

        })
        .catch(function(err){

        })

backend 
    connection db
    interaction with db 

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error).

Promise.prototype.then()
pass a function (cb) as an argument, the  value is make available inside the function

Promise.prototype.catch() 
pass a function (cb) as an argrument, the value (error) is make available inside the function
*/

function determineNumber(number) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(number % 2 == 0) {
                resolve(number)
            } else {
                reject(number)
            }
        }, 2000);
    })
}

determineNumber(101)
    .then(function (ele) {
        console.log('even', ele)
    })
    .catch(function (err) {
        console.log('odd', err)
    })
