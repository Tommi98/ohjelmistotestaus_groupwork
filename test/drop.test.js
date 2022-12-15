import chai from "chai"
import drop from "../src/drop.js"
const expect = chai.expect


describe("Tests for drop function", () => {
    it("should drop first element from the given list", () =>{
        expect(drop(['maito', 'piima', 'juusto'],1)).to.eql(['piima', 'juusto'])
    });

    it("should drop all elements from the given list", () =>{
        expect(drop(['maito', 'piima', 'juusto'],3)).to.eql([])
    });

    it("should return empty list with not valid arguments", () =>{
        expect(drop(3,"maito")).to.eql([])
    });

    // it("Should throw TypeError when used wrongly typed arguments ", () =>{
    //     expect(function() {
    //     drop('true', 'true');
    //         }).to.throw(TypeError);
    // });

})