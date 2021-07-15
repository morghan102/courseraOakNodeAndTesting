const assert = require('assert');
const Student = require('../src/student');

describe('Virtual types', () => {
    it('article countrs', done => {
        const jason = new Student({name: 'Jason', articles: [{title: 'First Title'}]})
        jason.save()
        .then(() => Student.findOne({name: 'Jason'})) //returns a promise, which is stu model/doc/~, which is used in the next .then
        .then(student => {
            assert(student.articleCount === 1)
            done()
        })
    })
})