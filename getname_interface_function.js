"use strict";
exports.__esModule = true;
function getName(person) {
    console.log("Hey ".concat(person.firstName, " ").concat(person.lastName));
    return "Hey ".concat(person.firstName, " ").concat(person.lastName);
}
var person = { firstName: "James", lastName: "cook" };
getName(person);
