'use strict'

function oddOrNone(){
    return new Promise((rej, res) => {
        const newNumber = parseInt(Math.random() * (10 - 1) + 1);
        console.log(`we have a number ${newNumber}`)
        setTimeout(()=>{
            newNumber % 2 === 0 ? rej("Cool") : res("not Cool")
        }, 2000)
    })
}


oddOrNone()
    .then(data => console.log(data))
    .catch(data => console.error(data))