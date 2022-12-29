const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getName method", () => {
        it("returns name", () => {
            const engineer = new Engineer('Mason', 56, 'mason@masonmail.com', 'MasonMarc');
            engineer.getName();
            expect(engineer.name).toBe('Mason');
        })
    });
    describe("getId method", () => {
        it("returns id", () => {
            const engineer = new Engineer('Mason', 56, 'mason@masonmail.com', 'MasonMarc');
            engineer.getId();
            expect(engineer.id).toBe(56);
        })
    });
    describe("getEmail method", () => {
        it("returns email", () => {
            const engineer = new Engineer('Mason', 56, 'mason@masonmail.com', 'MasonMarc');
            engineer.getEmail();
            expect(engineer.email).toBe('mason@masonmail.com');
        })
    });
    describe("getGitHub method", () => {
        it("returns GitHub", () => {
            const engineer = new Engineer('Mason', 56, 'mason@masonmail.com', 'MasonMarc');
            engineer.getGitHub();
            expect(engineer.GitHub).toBe('MasonMarc');
        })
    });
});
