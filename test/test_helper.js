const mongoose = require('mongoose');
const { deleteOne } = require('../src/student');

mongoose.connect("mongodb://localhost/students_test", {useNewUrlParser: true, useUnifiedTopology: true});//tells mongoose to connect to the mongo db running.
// after localhost is the db. If it doesnt already exist itll be created on this line

mongoose.connection //open and error are v particular events.
.once("open", () => console.log("we are connected"))//once means watch for Mongoose to emit an event caled 'open' 1x, and if it does emit the event run that func
.on("error", (error) => { //if it emits the error event, run that func
    console.warn("An error occurred", error)
})

beforeEach((done) => {//be is a hook thatll run b4 ea test, so itll empty out our db and then run the test
    mongoose.connection.collections.students.drop();
    done(); //i didnt totally get the explanation of this.
})