import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect


describe("Tests for filter function", () => {
    it("should return array list with elements where conditon is met", () =>{
        expect(filter([{'tuote': 'peruna', 'onkoJuures' : true }, {'tuote': 'mansikka', 'onkoJuures' : false }], value => value.onkoJuures))
        .to.eql([{'tuote': 'peruna', 'onkoJuures' : true }])
    });

    it("Should throw TypeError when used wrongly typed arguments ", () =>{
        expect(function() {
        endsWith('true', 'true');
            }).to.throw(TypeError);
    });
    
    
})
