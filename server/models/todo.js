var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true      // Remove all the extra space
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

//var otherTodo = new Todo({
//  text: 'Something to do'
//});
//
//otherTodo.save().then((doc) => {
//  console.log(JSON.stringify(doc, undefined, 2));
//}, (err) => {
//  console.log('Unable to save', err);
//});

module.exports = {Todo};