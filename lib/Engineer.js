const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, GitHub){
        super(name, id, email)
        this.GitHub = GitHub;
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
      getGitHub(){
          return this.GitHub;
        }
        getRole() {
          return 'Engineer';
        }
        managerHtml() {
            console.log(`<article>
            <h2>${this.name}</h2>
            <ul>
              <li>ID: ${this.id}</li>
              <li>Email: ${this.email}</li>
              <li>GitHub: ${this.GitHub}</li>
            </ul>
          </article>`)
        }

    printResults(){
        console.log(`${this.name} has an id of ${this.id} and an email of ${this.email} and their github is ${this.GitHub}`)
      }
}





module.exports = Engineer;
