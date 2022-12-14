import chai from "chai"
import endsWith from "../src/endsWith.js"
const expect = chai.expect


describe("Tests for endsWith function", () => {
    it("should return true when check does word maito end with aito", () =>{
        expect(endsWith('maito','aito')).to.equal(true)
    });

    it("should return false when check is o from maito's 0' letter", () =>{
        expect(endsWith('maito','o',0)).to.equal(false)
    });

    it("should return true when check is m maito's first letter", () =>{
        expect(endsWith('maito','m',1)).to.equal(true)
    });

    it("should return true when check is o maito's fifth letter", () =>{
        expect(endsWith('maito','o',5)).to.equal(true)
    });

    it("Should throw TypeError when used wrongly typed arguments ", () =>{
        expect(function() {
        endsWith('true', 'true', 'true');
            }).to.throw(TypeError);
    });

})