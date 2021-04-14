class Employee {  
    public branchcode: number;  
    protected empcode: string;  
    constructor(code: number, name: string){  
        this.branchcode = code;  
        this.empcode = name;  
        }  
}  
class Person extends Employee {  
    private department: string;  
  
    constructor(code: number, name: string, department: string) {  
        super(code, name);  
        this.department = department;  
    }  
    public getElevatorPitch() {  
        return (`My unique code: ${this.branchcode}, my name: ${this.empcode} and I am in ${this.department} Branch.`);  
    }  
}  
let joeRoot: Person = new Person(1, "SAVITA", "MANYATA");  
console.log(joeRoot.getElevatorPitch());  