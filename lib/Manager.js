const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
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
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }

    managerHtml() {
        return `<article>
        <h2>${this.name}</h2>
        <ul>
          <li>ID: ${this.id}</li>
          <li>Email: ${this.email}</li>
          <li>Office Number: ${this.officeNumber}</li>
        </ul>
      </article>`
    }

}


module.exports = Manager;
