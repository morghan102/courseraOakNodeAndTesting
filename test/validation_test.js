const assert = require('assert');
const Student = require('../src/student');

describe('validation', () => {//why no beforeEach?
    it('name is required', () => {
        const student = new Student({name : undefined})
        const result = student.validateSync() //synchronous, gives a result obj that will contain lots or properties if three is anything wrong in the student
        console.log(result)
        const { message } = result.errors.name //this pulls out the error message we want to view
        assert(message === 'Name is required')
    })

    it('name must be longer than 2 chars', () => {
        const newStudent = new Student({name: 'Em'})
        const newResult = newStudent.validateSync()
        const { message } = newResult.errors.name //this pulls out the error message we want to view
        assert(message === 'Name is too short')
    })

    it ('prevent invalid records', done => {
        const student = new Student({name: 'Em'})
        student.save()
        .catch(validationResult => { //catches invalid data before saving it to the db
            const {message} = validationResult.errors.name
            assert(message === 'Name is too short')
            done() //need done for async operats
        })
    })
})