const assert = require('assert');
const Student = require("../src/student");


describe("Create the first data", () => {
    it("Save the student", (done) => {
        const jason = new Student({name: "Jason"});
        jason.save()//save is async, so need to use promises
        .then(() => {
            assert(!jason.isNew)
            done()
        })
    })
})