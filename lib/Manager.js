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
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MY TEAM</title>
        </head> 
        <body>
        
        <article>
        <h2>${this.name}</h2>
        <ul>
          <li>ID: ${this.id}</li>
          <li>Email: ${this.email}</li>
          <li>Office Number: ${this.officeNumber}</li>
        </ul>
      </article>
      `
    }

}


module.exports = Manager;
