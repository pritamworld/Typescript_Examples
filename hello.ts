var message = "Hello TypeScript"
var msg:String = "Hello" //Interface
var m:string = "Hello Again";
var id:number = 1000
var check:boolean = true

var s: string
s = "String values"
console.log(message)

var x:any
x = 100
x = "ohh string"

//Union Type Declaration
var y: string | number | boolean
y = 10
y = "Hello"
y = true

const x1 = 100

function add(a:number, b:number){
    return a + b
}

console.log(add(5, 10))
console.log(typeof message)
console.log(typeof id)