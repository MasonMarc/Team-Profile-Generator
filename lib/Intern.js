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
        return this.school;
    }
    getRole() {
        return 'Intern';
    }

    internHtml() {
        return `
        <article>
    <h2>${this.name}</h2>
    <ul>
      <li>ID: ${this.id}</li>
      <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
      <li>School: ${this.school}</li>
    </ul>
  </article>
  `
    }

}

module.exports = Intern;
