import { Student } from "./Student"

export default class PartTimeStudent extends Student{

    class_time: string
    constructor(id:number, fnm:string, lnm:string, r: string, ct:string){
        super(id, fnm, lnm, r)
        this.class_time = ct
    }

    print(): void {
        console.log(this.id)
        console.log(this.first_name)
        //this.last_name = "not allowed"
    }
    
    sayHello(){
        console.log("Hello from Part Time Student Class")
    }
}