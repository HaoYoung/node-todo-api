//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5af3728eb517d8b5202fed01')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false // false: get new document back
  }).then((result) => {
    console.log(result);
  });
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5af36ef7d3a72422907be2ae')
  }, {
    $set: {
      name: 'John'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  
  client.close();
});