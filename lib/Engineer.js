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
        <article class="card col-md-3 col-sm-8 m-3 p-3">
                <h2 class="card-header">${this.name}</h2>
                <em>engineer</em>
                <ul class="card-body">
                    <li class="card-text">Employee ID: ${this.id}</li>
                    <li class="card-text">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                    <li class="card-text">GitHub: <a href="https://github.com/${this.GitHub}" target="_blank">${this.GitHub}</a>
                    </li>
                </ul>
            </article>
          `
    }


}





module.exports = Engineer;
