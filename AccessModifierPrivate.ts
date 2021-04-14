class Employee1 {  
    public branchcode: number;  
    private empcode: string;    // this will give compilation error as private modofiers cannot be accessed outside the class
    constructor(code: number, name: string){  
        this.branchcode = code;  
        this.empcode = name;  
        }  
}  
class Person1 extends Employee1 {  
    private department: string;  
  
    constructor(code: number, name: string, department: string) {  
        super(code, name);  
        this.department = department;  
    }  
    public getElevatorPitch() {  
        return (`My unique code: ${this.branchcode}, my name: ${this.empcode} and I am in ${this.department} Branch.`);  
    }  
}  
let joeRoot1: Person1 = new Person1(1, "SAVITA", "MANYATA");  
console.log(joeRoot.getElevatorPitch());  