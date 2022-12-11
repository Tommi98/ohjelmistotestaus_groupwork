import chai from "chai"
import countBy from "../src/countBy.js"
const expect = chai.expect

describe("Tests for countBy function", () => {
    it("Test for empty argument call", () =>{
        const users = []
        expect(countBy(users, value => value.name)).deep.to.equal({});
    });
    it("Test for simple number array", () =>{
        const numbers = [1,2,3,4,5,3,2,3,3];
        expect(countBy(numbers, value => value)).deep.to.equal([{'1':1,'2':2,'3':4,'4':1,'5':1}]);
    });
    it("Test for simple object array boolean values", () =>{
        const users = [
           { 'userName': 'Testaaja', 'emailConfirmed': true },
           { 'userName': 'Matti', 'emailConfirmed': false },
           { 'userName': 'Maija', 'emailConfirmed': false },
           { 'userName': 'Mikko', 'emailConfirmed': true },
           { 'userName': 'Admin', 'emailConfirmed': true }
        ]
        expect(countBy(users, value => value.emailConfirmed)).deep.to.equal([{'true':3,'false':2}]);
    });
    it("Test for simple object array String values", () =>{
        const users = [
           { 'userName': 'Testaaja', 'emailConfirmed': false },
           { 'userName': 'Matti', 'emailConfirmed': false },
           { 'userName': 'Maija', 'emailConfirmed': true },
           { 'userName': 'Testaaja', 'emailConfirmed': false },
           { 'userName': 'Mikko', 'emailConfirmed': true },
           { 'userName': 'Admin', 'emailConfirmed': true }
        ]
        expect(countBy(users, value => value.userName)).deep.to.equal([{'Testaaja':2,'Matti':1,'Maija':1,'Mikko':1,'Admin':1}]);
    });
})