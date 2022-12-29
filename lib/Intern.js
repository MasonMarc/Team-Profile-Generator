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
        <article class="card col-md-3 col-sm-8 m-3 p-3">
                <h2 class="card-header">${this.name}</h2>
                <em>intern</em>
                <ul class="card-body">
                    <li class="card-text">Employee ID: ${this.id}</li>
                    <li class="card-text">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="card-text">School: ${this.school}</li>
                </ul>
            </article>
  `
    }

}

module.exports = Intern;
