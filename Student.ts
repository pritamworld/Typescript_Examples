import  IPerson, {college_name}  from "./IPerson";

export class Student implements IPerson{
    //private id: number;
    id: number;
    //protected first_name: string;
    first_name: string;
    readonly last_name: string;
    result: string

    constructor(id:number, fnm:string, lnm:string, r: string){
        this.id = id
        this.first_name = fnm
        this.last_name = lnm
        this.result = r
    }

    print(): void {
        console.log(this.id)
        console.log(this.first_name)
    }
}