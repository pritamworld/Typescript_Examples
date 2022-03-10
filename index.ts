import  IPerson, {college_name}  from "./IPerson";
import { Student } from "./Student";
import PartTimeStudent from "./PartTimeStudent";

//IPerson Interface
var p1: IPerson = {
    id:1,
    first_name: "Pritesh",
    last_name: "Patel",

    print(){
        console.log(this.id)
        console.log(this.first_name)
        console.log(this.last_name)
    }
}

p1.print()
console.log(college_name)

//Student
var s1 = new Student(1, "Pritesh", "Patel", "fail")
//s1.id = 10
//s1.first_name = "test"
s1.print()


//Part Time Student
var ps1 = new PartTimeStudent(2, "Vanja", "Vego", "Pass", "Evening")
ps1.print()
ps1.sayHello()
//ps1.first_name = "sgdsg"