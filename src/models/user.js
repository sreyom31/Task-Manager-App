const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

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
            if (value.toLowerCase().includes('password')) {
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

userSchema.pre('save', async function (next) {
    const user = this
    
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = new mongoose.model('User', userSchema);

module.exports = User