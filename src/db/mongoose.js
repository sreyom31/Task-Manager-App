const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { useNewUrlParser: true });

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email must be invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [7, 'Minimum length of password must be 7 letters'],
        validate(value) {
            if (value.toLowercase().includes('password')) {
                throw new Error('password cannot contain password word');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },

})

const User = new mongoose.model('User', userSchema);

const me = new User({
    name: '   Sreyom   ',
    email: 'MYEMAIL@GMAIL.COM',
    password: 'pas'
})

me.save().then(me => {
    console.log(me);
}).catch(error => {
    console.log(error);
})

const taskSchema = mongoose.Schema({
    description: {
        type: String
    },
    completed: {
        type: Number
    }
})

const Task = new mongoose.model('Task', taskSchema);

// const task = new Task({
//     description: 'make new connections',
//     completed: true
// })

// meTask.save().then(task => {
//     console.log(task);
// }).catch(error => {
//     console.log(error);
// })