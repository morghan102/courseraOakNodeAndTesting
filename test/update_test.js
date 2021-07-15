const assert = require('assert');
const Student = require('../src/student');

describe('Updating records', () => {
    let jason;
    let jason2;

    beforeEach((done) => {
        jason = new Student({name: 'Jason', studentNumber: 2500, articleCount: 5, grade: 10})
        jason.save()
        .then(() => done())
    })

    // it('set and save', done => {
    //     console.log(jason);
    //     jason.set('name', 'Alex') //the property you want to update and then what it shd become
    //     // HOWEVRE the changes only happen in memory and not in the db
    //     jason.save()// save is how you put this into the db
    //     .then(() => Student.find({}) )//so since the name was chaged to alex, there shd only be 1 student returned now (Alex), and that's what you'll assert
    //     .then(students => {
    //         assert(student[0].name === 'Alex')
    //         done()
    //     })
    //     done()
    // })



    // it('update one of the jasons', async() => {
    //     const student = await Student.updateOne({name: 'Jason'}, {studentNumber: 3000})
    //     const res = await Student.find({})
    //     assert(res[0].studentNumber === 3000)
    //     console.log(res);
    // })


    // it('update multiple jasons', async() => {
    //     const student = await Student.updateMany({name: 'Jason'}, {studentNumber: 3000})
    //     const res = await Student.find({})
    //     assert(res[0].studentNumber === 3000 && res[1].studentNumber === 3000)
    //     console.log(res);
    // })


    xit('update grades using $mul from mongo', async () => { //operators w a $ are called atomic operators
        const artCount = await Student.findOne({name: 'Jason'})
        const student = await Student.updateOne({name: 'Jason'}, {$mul: {grade: artCount.articleCount}}) //$mul is multiplication operator from mongo
        const res = await Student.find({name: 'Jason'})
        assert(res[0].grade === 50)
        console.log(res);
    })
})

// NOTE abt set&save: Better to save after ALL updates, instead of after each one like we've done here