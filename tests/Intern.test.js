const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getName method", () => {
        it("returns name", () => {
            const intern = new Intern('Mason', 56, 'mason@masonmail.com', 'UNCC');
            intern.getName();
            expect(intern.name).toBe('Mason');
        })
    });
    describe("getId method", () => {
        it("returns id", () => {
            const intern = new Intern('Mason', 56, 'mason@masonmail.com', 'UNCC');
            intern.getId();
            expect(intern.id).toBe(56);
        })
    });
    describe("getEmail method", () => {
        it("returns email", () => {
            const intern = new Intern('Mason', 56, 'mason@masonmail.com', 'UNCC');
            intern.getEmail();
            expect(intern.email).toBe('mason@masonmail.com');
        })
    });
    describe("getSchool method", () => {
        it("returns school", () => {
            const intern = new Intern('Mason', 56, 'mason@masonmail.com', 'UNCC');
            intern.getSchool();
            expect(intern.school).toBe('UNCC');
        })
    });
});
