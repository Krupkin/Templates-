'use strict'

let a = {
    name: "Yaroslav",
    age: "31"
}


try{
    console.log(a.name);
    if(!a.sex){
        throw new Error("blockError")
    }
}
catch(err){
    console.log(err)
}