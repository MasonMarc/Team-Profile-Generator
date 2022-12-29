const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getName method", () => {
        it("returns name", () => {
            const manager = new Manager('Mason', 56, 'mason@masonmail.com', 103);
            manager.getName();
            expect(manager.name).toBe('Mason');
        })
    });
    describe("getId method", () => {
        it("returns id", () => {
            const manager = new Manager('Mason', 56, 'mason@masonmail.com', 103);
            manager.getId();
            expect(manager.id).toBe(56);
        })
    });
    describe("getEmail method", () => {
        it("returns email", () => {
            const manager = new Manager('Mason', 56, 'mason@masonmail.com', 103);
            manager.getEmail();
            expect(manager.email).toBe('mason@masonmail.com');
        })
    });
    describe("getofficeNumber method", () => {
        it("returns Office Number", () => {
            const manager = new Manager('Mason', 56, 'mason@masonmail.com', 103);
            manager.getofficeNumber();
            expect(manager.officeNumber).toBe(103);
        })
    });
});
