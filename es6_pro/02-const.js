// 1、声明之后不允许改变    
const PI = '3.1415926'
// 2、一但声明必须初始化，否则会报错
const MY_AGE  // SyntaxError: Missing initializer in const declaration

PI = 3  // TypeError: Assignment to constant variable.