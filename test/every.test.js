import chai from "chai"
import every from "../src/every.js"
const expect = chai.expect


describe("Tests for every function", () => {
    it("should pass predicate check and should return true", () =>{
        expect(every([true,true], Boolean)).to.equal(true)
    });
    it("should pass predicate check and return should true", () =>{
        expect(every([true,1,'yes'], Boolean)).to.equal(true)
    });
    it("shouldn't pass predicate check and return should false", () =>{
        expect(every([false,false], Boolean)).to.equal(false)
    });
    it("should pass predicate check and return should true", () =>{
        expect(every([true,'false'], Boolean)).to.equal(true)
    });
})