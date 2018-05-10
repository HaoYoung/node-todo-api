var mongoose = require('mongoose');

// User Model
// email - required - trim it - set type as string - set min length of 1
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

//var user = new User ({
//  email: 'haoyang@example.com'
//});
//
//user.save().then((doc) => {
//  console.log(JSON.stringify(doc, undefined, 2));
//}, (err) => {
//  console.log('Unable to save', err);
//});

module.exports = {User};