const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName method", () => {
        it("returns name", () => {
            const employee = new Employee('Mason', 56, 'mason@masonmail.com');
            employee.getName();
            expect(employee.name).toBe('Mason');
        })
    });
    describe("getId method", () => {
        it("returns id", () => {
            const employee = new Employee('Mason', 56, 'mason@masonmail.com');
            employee.getId();
            expect(employee.id).toBe(56);
        })
    });
    describe("getEmail method", () => {
        it("returns email", () => {
            const employee = new Employee('Mason', 56, 'mason@masonmail.com');
            employee.getEmail();
            expect(employee.email).toBe('mason@masonmail.com');
        })
    });

});
