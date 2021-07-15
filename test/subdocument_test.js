const assert = require('assert');
const Student = require('../src/student');

describe('subdoc', () => {
    // it('creating a subdoc', done => {
    //     const jason = new Student({
    //         name: 'Jason',
    //         articles: [{title: 'JS'}]
    //     })
    //     jason.save()
    //     .then(() => {
    //         Student.findOne({name: 'Jason'})
    //         .then(student => {//student is whats returned by the findOne query
    //             assert(student.articles[0].title === 'JS')
    //             done()
    //         })
    //     })
    // })

    // it('Add a new record', done => {
    //     const jason = new Student({name: 'Jason', articles: []})
    //     jason.save()
    //     .then(() => Student.findOne({name: 'Jason'}))
    //     .then(student => {
    //         student.articles.push({title: 'MongoDB'})
    //         return student.save() //BC OF THE CURLY BRACES, need the return in order to return the promise and subsequently fetch student
    //     })
    //     .then(() => Student.findOne({name: 'Jason'})) //no return needed here bc no curly braces
    //     .then(student => {
    //         assert(student.articles[0].title === 'MongoDB')
    //         done()
    //     })
    // })


    it('remove the records', done => {
        const jason = new Student({name: 'Jason', articles: [{title: 'React Native'}]})
        jason.save()
        .then(() => Student.findOne({name: 'Jason'}))
        .then(student => {
            student.articles[0].remove() //"alternaitve SPI"/"virtual type" is better -- when working w mongoose, slice or ~ iant the best way to remove smth. Cuz... not rlly sure. The records become too many??
            return student.save()
        })
        .then(() => Student.findOne({name: 'Jason'}))
        .then(student => {
            assert(student.articles.length === 0)
            done()
        })
    })
})