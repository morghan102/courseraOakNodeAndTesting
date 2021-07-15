const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = require('./article_schema');

const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        validate: { //This key decides how a particular property should be validated after the validate function. I specifies the criteria that decide if a property is vaid or not
            validator: (name) => name.length > 2,
            message: 'Name is too short'
        }
    },//this is for validation
    studentNumber: Number,
    // articleCount: Number, //deleting this so we can use a virtual type bc we dont want to save it to the db (idk why)
    grade: Number,
    articles: [ArticleSchema], //the array tells mongo to expect a subdoc
})

StudentSchema.virtual('articleCount').get(function () {//You can define these virtual properties that will behave like normal mongoose ones (as studentName.articleCount = #ofArticles, just as expected)
    // console.log('run the getter func')//that name.virtualProperty will return whats inside of here
    return this.articles.length //'this' is the instance of the model we're working on
})

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;