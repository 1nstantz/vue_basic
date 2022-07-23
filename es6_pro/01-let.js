{ 
  var a =0
  let b =1
}
//var变量是全局的  let只能局部访问
console.log(a)
console.log(b)

var a =1
var b ='2'
//var 可以重复定义
let n = 1
let n = 2
//var 不可以重复定义，会报错

// var 会变量提升
// let 不存在变量提升
console.log(x)  //undefined
var x = 'apple'
console.log(y)  //ReferenceError: y is not defined
let y = 'banana'