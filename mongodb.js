// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const objectId = mongodb.objectId

const { MongoClient, ObjectId } = require("mongodb");

// const id = new ObjectId()
// console.log(id);
// console.log(id.getTimestamp());

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    console.log("Connected correctly!");

    const db = client.db(databaseName);

    //? Inserting documents

    //* Insert One
    // db.collection('users').insertOne({
    //     name: 'Sreyom',
    //     age: 19
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result);
    // })

    //* Attaching your own objectId
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result);
    // })

    //* Insert Many
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "gunther",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result);
    //   });

    //* Insert Many Challenge
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'nodejs',
    //         completed: false
    //     },
    //     {
    //         description: 'play table tennis',
    //         completed: true
    //     },
    //     {
    //         description: 'dsa',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert tasks");
    //     }
    //     console.log(result);
    // })

    //? Quering Documents

    //* Find One
    // db.collection('users').findOne({ _id: new ObjectId('618b7ff91db39da6f66c6a2c') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    // })

    //* Find Many
    //! Find function returns a cursor which again has a bunch of functions to execute
    //* using toArray function of the returned cursor
    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(users);
    // })

    //* using count function of the returned cursor
    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(count);
    // })

    //? Updating documents

    //* Update One
    // db.collection('users').updateOne({
    //     _id: new ObjectId('618b7ff91db39da6f66c6a2c')
    // }, {
    //     $set: {
    //         name: 'sresaan'
    //     },
    //     $inc: {
    //         age: -1
    //     }
    // }).then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // })

    //* Update Many
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then(result => {
    //     console.log(result);
    // }).catch(error => {
    //     console.log(error);
    // })

    //? Delete Documents

    //* Delete One
    // db.collection("users")
    // .deleteOne({
    //   age: 32,
    // })
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    //* Delete Many
    // db.collection("users")
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
