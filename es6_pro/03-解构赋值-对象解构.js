//1、数组解构
let arr = [1, 2, 3]
// 传统
let a = arr[0]
let b = arr[1]
let c = arr[2]
console.log(a, b, c)
// ES6
let [x, y, z] = arr
console.log(x, y, z)

//2、对象解构
let user = {name: 'Helen', age: 18}
// 传统
let name1 = user.name
let age1 = user.age
console.log(name1, age1)
// ES6
let { name, age } =  user//注意：解构的变量必须和user中的属性同名
//就相当于name=user.name age=user.age
console.log(name, age)