const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, GitHub) {
        super(name, id, email)
        this.GitHub = GitHub;
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
    getGitHub() {
        return this.GitHub;
    }
    getRole() {
        return 'Engineer';
    }
    engineerHtml() {
        return `
        <article>
            <h2>${this.name}</h2>
            <ul>
              <li>ID: ${this.id}</li>
              <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
              <li>GitHub: <a href="https://github.com/${this.GitHub}" target="_blank">${this.GitHub}</a></li>
            </ul>
          </article>
          `
    }


}





module.exports = Engineer;
