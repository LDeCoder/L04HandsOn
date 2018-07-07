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
  

  class Manager extends Employee {
      constructor(jobDescription, name, salary, hireDate) {
          super(name, salary, hireDate);
          this.jobDescription = jobDescription;
      }
      descriptionOfJob(){
          console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " because " + this.jobDescription);
  }
  
  class Designer extends Employee {
      constructor(yearsExperience, name, salary, hireDate) {
          super(name, salary, hireDate);
          this.yearsExperience = yearsExperience;
      }
      Experience() {
          console.log (this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " because " + this.yearsExperience);
      }
  }

  class salesAssociate extends Employee {
        constructor(degreeCompleted, name, salary, hireDate) {
            super(name, salary, hireDate);
            this.degreeCompleted = degreeCompleted;
        }
        Degree() {
            console.log (this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " because " + this.degreeCompleted);

  }
}
  
  let Fred = new Manager("he is everyone's boss.", "Fred Flintstone", 99000, "8/1/2005");
  let Barney = new Designer("he has been here for 20 years!", "Barney Rubble" , 75000, "3/15/2008");
let Betty = new salesAssociate("she has a masters in sales!", "Betty Rubble", 50000, "2/1/2015");



Fred.descriptionOfJob();
Barney.Experience();
Betty.Degree();





//   - [ ] Lastly, using each of the new instances, call each of the methods that live within the respective subclasses so you can see each of the console.logs in your console.
//     - [ ] Use the http-server to run this project
