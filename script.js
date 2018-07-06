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
      jobDescription(descriptionOfJob) {
          console.log(this.name + " was hired on " + this.hireDate + " and makes " this.salary + " because they " + this.jobDescription);
  }
  class designer extends Employee {
      constructor(yearsExperience, name, salary, hireDate) {
          super(name, salary, hireDate);
          this.yearsExperience = yearsExperience;
      }
      yearsExperience (experience) {
          console.log (this.name + " was hired on " + this.hireDate + " and makes " this.salary + " because they have " + this.yearsExperience);
      }
  }

  class salesAssociate extends Employee {
        constructor(degreeCompleted, name, salary, hireDate) {
            super(name, salary, hireDate);
            this.degreeCompleted = degreeCompleted;
        }
        degreeCompleted (degree){
            console.log(this.name + " was hired on " + this.hireDate + " and makes " this.salary + " because they have " + this.degree);

        }

  } 

  