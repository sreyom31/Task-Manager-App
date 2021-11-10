const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { useNewUrlParser: true });

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const User = new mongoose.model('User', userSchema);

// const me = new User({
//     name: 'Sreyom',
//     age: 19
// })

// me.save().then(me => {
//     console.log(me);
// }).catch(error => {
//     console.log(error);
// })

const taskSchema = mongoose.Schema({
    description: {
        type: String
    },
    completed: {
        type: Number
    }
})

const Task = new mongoose.model('Task', taskSchema);

const task = new Task({
    description: 'make new connections',
    completed: true
})

meTask.save().then(task => {
    console.log(task);
}).catch(error => {
    console.log(error);
})