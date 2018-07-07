class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

  let sally = new Employee("Sally", 25000, "5/25/2018");
  let billy = new Employee("Billy", 30000, "6/10/2018");
  let june = new Employee("June", 23000, "7/1/2018");

  sally.getName();
  billy.getSalary();
  june.getHireDate();


class NewEmployee extends Employee {
        constructor(position, name, salary, hireDate) {
            super(name, salary, hireDate);
            this.position = position;
    }       
        descriptionOfJob() {
            console.log("Hi! My name is " + this.name + ", and I am excited to make " + this.salary + ", as your new " + this.position + "!");
    }
        
        Experience() {
            console.log ("Meet, " + this.name + ", our graphics " + this.position + ", who has been designing for 15 years!");
    }
        Degree() {
            console.log ("This is our newest " + this.position + ", " + this.name + ", who was hired because she has a masters in sales!");
  }

}

let employee1 = new NewEmployee ("manager", "Fred Flintstone", 100000, "6/1/2018");
let employee2 = new NewEmployee ("designer", "Barney Rubble" , 75000, "6/15/2018");
let employee3 = new NewEmployee ("Sales Associate", "Betty Rubble", 50000, "7/1/2018");

employee1.descriptionOfJob();
employee2.Experience();
employee3.Degree();