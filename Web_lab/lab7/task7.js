var txtarea = document.getElementById('input');
class Member {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Employee extends Member {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.department = department;
    }
    printEmpDetails()    
    { txtarea.value=`The Employee details are :Name= ${this.name} ,Age= ${this.age},Salary= ${this.salary},Department= ${this.department}`
     }
} 
const a = new Employee('Adil Waheed', 21, 25000, 'BSE');
a.printEmpDetails();