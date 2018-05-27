const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/***** SHA256 EXAMPLE *****/
//var message = 'I am user number 3';
//var hash = SHA256(message).toString();
//
//console.log(`Message: ${message}`);
//console.log(`Hash: ${hash}`);
//
//var data = {
//  id: 4
//};
//
//var token = {
//  data,
//  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
//}

// middle man attack example
//token.data.id = 5;
//token.hash = SHA256(JSON.stringify(token.data)).toString();

//var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//if (resultHash === token.hash) {
//  console.log('Data was not changed');
//} else {
//  console.log('Data was changed. Do not trust!');
//}

/***** jwt EXAMPLE *****/
//var data = {
//  id: 10
//};
//var token = jwt.sign(data, '123abc');
//console.log(token);
//
//var decoded = jwt.verify(token, '123abc');
//console.log('decoded', decoded);

/***** bcrypt EXAMPLE *****/
var password = 'abc123!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$CS4EjyyFG/lsVEn9BlP1Su3m1eMpkloFc74xqEn3RCH47wof/PhCq';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});



