import chai from "chai"
import isEmpty from "../src/isEmpty.js"
const expect = chai.expect


describe("Tests for isEmpty function", () => {
    it("should return false", () =>{
        expect(isEmpty([1,2,3])).to.equal(false)
    });
    
    it("should return true", () =>{
        expect(isEmpty(null)).to.equal()
    });
})