const assert = require('assert');
const Student = require('../src/student');

describe("Read the data", (done) => {
    let jason;
    let jason2;

    beforeEach((done) => {
        jason = new Student({name: 'Jason'});
        jason2 = new Student({name: 'Jason'});

        jason.save()
        jason2.save()
        .then(() => done())

        console.log(jason);
        console.log(jason2);
    })

    // it('find all jasons', async () => {
    //     const students = await Student.find({name: 'Jason'})//find(inside here is the criteria youre looking for)
    //     console.log(students);
    //     assert(students[0]._id.toString() === jason._id.toString())//to string is improtant bc it cmpares the actual strings instead of smth else??
    // })
    it('Find one of the jasons', async () => {
        const students = await Student.findOne({_id: jason._id});
        console.log(students);
        assert(students.name === 'Jason');
    })
})