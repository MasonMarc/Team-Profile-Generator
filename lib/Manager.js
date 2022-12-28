const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getName(){
        return this.name;
      }
      getId(){
        return this.id;
      }
      getEmail(){
        return this.email;
      }
      getRole() {
        return 'Manager';
      }
      getofficeNumber(){
        return this.officeNumber;
      }
      
    managerHtml() {
        console.log(`<article>
        <h2>${this.name}</h2>
        <ul>
          <li>ID: ${this.id}</li>
          <li>Email: ${this.email}</li>
          <li>Office Number: ${this.officeNumber}</li>
        </ul>
      </article>`)
    }
    printResults() {
        console.log(`${this.name} has an id of ${this.id} and an email of ${this.email} and is in office ${this.officeNumber}`)
    }
}




module.exports = Manager;
