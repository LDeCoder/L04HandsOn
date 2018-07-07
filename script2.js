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

  Create three new subclasses that inherit from the Employee parent class above:
  Manager
  Designer
  SalesAssociate

  Add the following methods to the noted subclasses:
  Add the method jobDescription() to the Manager subclass
  Add the method yearsExperience() to the Designer subclass
  Add the method degreeCompleted() to the SalesAssociate subclass

  Each new subclass should use a constructor and the super method
  The Manager subclass constructor will need a new parameter: descriptionOfJob
  The Designer subclass constructor will need a new parameter: experience
  The SalesAssociate subclass constructor will need a new parameter: degrees

  The following methods should console.log the specified sentences:
  jobDescription() should console.log a sentence that provides the person's name, hire date, salary and their job description
  yearsExperience() should console.log a sentence that provides the person's name, hire date, salary and their years of experience
  degreeCompleted() should console.log a sentence that provides the person's name, hire date, salary and the degree they have completed

  Use the this keyword within the console.logs
  
  Create one new instance of each subclass (three instances total) to define the parameters located within the constructors.
  This is where the console.logs within the methods will be given actual information to console.log
  Each new instance should include a name, a hire date, and a salary along with the appropriate last parameter (descriptionOfJob, experience, or degree)
  An example of the end result would be "Donna was hired on 3/22/17 and makes 80000 because she manages the sales staff"

  Lastly, using each of the new instances, call each of the methods that live within the respective subclasses so you can see each of the console.logs in your console.
  
  Use the http-server to run this project
  