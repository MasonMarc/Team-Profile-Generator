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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <title>MY TEAM</title>
        </head> 
        <body>
        
        <article>
        <h2>${this.name}</h2>
        <ul>
          <li>ID: ${this.id}</li>
          <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
          <li>Office Number: ${this.officeNumber}</li>
        </ul>
      </article>
      `
    }

}


module.exports = Manager;
