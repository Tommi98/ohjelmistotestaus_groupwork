import chai from "chai"
import castArray from "../src/castArray.js"
const expect = chai.expect

describe("Tests for castArray function", () => {
    it("Test for empty call", () =>{
        expect(castArray()).deep.to.equal([]);
    });
    it("Test for undefined argument", () =>{
        expect(castArray(undefined)).deep.to.equal([undefined]);
    });
    it("Test for null argument", () =>{
        expect(castArray(null)).deep.to.equal([null]);
    });
    it("Test for single number value", () =>{
        expect(castArray(5)).deep.to.equal([5]);
    });
    it("Test for single String value", () =>{
        expect(castArray("Testing is fun!")).deep.to.equal(["Testing is fun!"]);
    });
    it("Test for single Boolean value", () =>{
        expect(castArray(true)).deep.to.equal([true]);
    });
    it("Test for giving key value pair as argument", () =>{
        expect(castArray({'id': 12465})).deep.to.equal([{'id': 12465}]);
    });
    it("Test for giving array as argument", () =>{
        expect(Array.isArray(castArray([1,2,3,4,5]))).deep.to.equal(true);
    });
})