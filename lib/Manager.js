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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <title>My Team</title>
            <style>
                body {
                    color: rgb(250, 218, 176);
                    background-color: antiquewhite;
                    font-family: Georgia, 'Times New Roman', Times, serif;
                }
        
                .navbar {
                    background-color: #5475E3;
                }
                span{
                    position: relative;
                    top: 20px;
                }
        
                .card {
                    color: rgb(90, 64, 48);
                    background-color: #b2da84;
                    border-bottom-right-radius: 20%;
                    border-bottom-left-radius: 20%;
                }
        
                .card-header {
                    background-color: #9cbe76;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
        
                .btn {
                    background-color: #5475E3;
                }
        
                li {
                    padding: 0.5em;
                    font-size: 18px;
                }
        
                em {
                    font-size: 20px;
                    background-color: #718a54;
                    color: antiquewhite;
                    display: flex;
                    justify-content: center;
                }
        
                a {
                    background-color: #5475E3;
                    color: rgb(250, 243, 234);
                    padding: 0.3em;
                    margin: 2px;
                    border-radius: 8px;
                }
        
                a:hover {
                    color: #5475E3;
                    background-color: rgb(248, 246, 243);
        
                }
            </style>
        </head>
        
        <body>
            <nav class="navbar">
                <div class="container-fluid display-flex justify-content-center">
                    <span class="navbar mb-5 h1">Team Members</span>
                </div>
            </nav>
        
            <div class="container-fluid">
                <div class="row display-flex justify-content-center mt-4 ">
                    <article class="card col-md-3 col-sm-8 m-3 p-3">
                        <h2 class="card-header">${this.name}</h2>
                        <em>manager</em>
                        <ul class="card-body">
                            <li class="card-text">Employee ID: ${this.id}</li>
                            <li class="card-text">Email: <a href="mailto:${this.email}">${this.email}</a>
                            </li>
                            <li class="card-text">Office Number: ${this.email}</li>
                        </ul>
                    </article>
      `
    }

}


module.exports = Manager;
