const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all the todos
//Todo.remove({}).then((result) => {
//  console.log(result);
//});

//  Todo.findOneAndRemove
//Todo.findOneAndRemove({_id: '5b0a1b07b3349156dc2f0d52'}).then((todo) => {
//  console.log(todo);
//});

//  Todo.findByIdAndRemove
Todo.findByIdAndRemove('5b0a1b07b3349156dc2f0d52').then((todo) => {
  console.log(todo);
});