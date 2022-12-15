import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect


describe("Tests for add function", () => {
 it("Add positive (+) number to positive (+) number", () =>{
     expect(add(5,5)).to.equal(10)
 });
 it("Add positive (+) number to negative (-) number", () =>{
    expect(add(5,-7)).to.equal(-2)
 });
 it("Add negative (-) number to negative (-) number", () =>{
    expect(add(-5,-7)).to.equal(-12)
 });
//  it("Should throw TypeError if argument is not a number", () =>{
//     expect(function() {
//         add(5,"s");
//     }).to.throw(TypeError);
//  });
})