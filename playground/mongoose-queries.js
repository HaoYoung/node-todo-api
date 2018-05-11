const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5af529d4d070382dbca64344';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

//Todo.find({
//  _id: id
//}).then((todos) => {
//  console.log('Todos', todos);
//});
//
//Todo.findOne({
//  _id: id
//}).then((todo) => {
//  console.log('Todo', todo);
//});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found');
  }
  console.log('Todo By ID', todo);
}).catch((e) => console.log(e));

User.findById('5af3d8e58d9e8103a42f2189').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log('User By ID', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));