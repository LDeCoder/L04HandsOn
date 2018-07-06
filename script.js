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
      jobDescription() {
          console.log(add a job description in line 25);
      }
  }

  class designer extends Employee {
      constructor(yearsExperience, name, salary, hireDate) {
          super(name, salary, hireDate);
          this.yearsExperience = yearsExperience;
      }
      yearsExperience () {
          console.log (add years experience to line 35);
      }
  }

  class salesAssociate extends Employee {
        constructor(degreeCompleted, name, salary, hireDate) {
            super(name, salary, hireDate);
            this.degreeCompleted = degreeCompleted;
        }
        degreeCompleted (){
            console.log(add a degree completed to line 45);
        }

  }

