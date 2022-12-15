import chai from "chai"
import capitalize from "../src/capitalize.js"
const expect = chai.expect

describe("Tests for capitalize function", () => {
    it("Test with upper case letters", () =>{
        expect(capitalize("HELLO WORLD!")).to.equal("Hello world!");
    });
    it("Test with lower case letters", () =>{
       expect(capitalize("hello mocha!")).to.equal("Hello mocha!");
    });
    it("Test with lower and upper case letters", () =>{
        expect(capitalize("heLLo ChAI!")).to.equal("Hello chai!");
    });
    it("Test with number at the start", () =>{
        expect(capitalize("8heLLo ChAI!")).to.equal("8hello chai!");
    });
    it("Should throw TypeError if argument is not a string", () =>{
       expect(function() {
            capitalize(435334634);
       }).to.throw(TypeError);
    });
   })