// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const objectID = mongodb.objectID

const { MongoClient, ObjectId } = require('mongodb')

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
  }
);
