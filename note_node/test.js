const fs = require('fs')
// console.log(require)

const app={
    name:'zhujin',
    sayHello:function(){
        console.log(this.name)
    }
}

const age = {
    age:100
}

//node模块暴露的两种方式
// module.exports  = {
//     app,
//     age
// }
//第二种方式，总的来说node模块暴露，其实暴露出去的就是一个对象
// const test = module.exports
// test.app = app
// test.age = age
module.exports.app = app
module.exports.age = age

