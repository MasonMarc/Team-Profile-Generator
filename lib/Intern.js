const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getschool() {
        return 'UNCC';
    }
    getRole() {
        return 'Intern';
    }

    internHtml() {
        console.log(`<article>
    <h2>${this.name}</h2>
    <ul>
      <li>ID: ${this.id}</li>
      <li>Email: ${this.email}</li>
      <li>School: ${this.school}</li>
    </ul>
  </article>`)
    }
    printResults() {
        console.log(`${this.name} has an id of ${this.id} and an email of ${this.email} and goes to ${this.school}`)
    }
}

let intern = new Intern(name, id, email, school)

intern.printResults();

module.exports = Intern;
