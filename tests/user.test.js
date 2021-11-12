const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId()

const userOne = {
    _id: userOneId,
    name: 'Mike',
    email: 'mike@example.com',
    password: '56what!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

beforeEach(async () => {
  await User.deleteMany()
  await new User(userOne).save()  
})

test('Should sign up a new user', async () => {
    await request(app).post('/users')
        .send({
        name: 'Sreyom',
        email: 'sreyom@example.com',
        password: 'Mypass777!'
        })
        .expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login')
        .send({
        email: userOne.email,
        password: userOne.password
        })
        .expect(200)
})

test('Should not login non existent user', async () => {
    await request(app).post('/users/login')
        .send({
        email: userOne.email,
        password: 'thisisnotmypass'
        })
        .expect(400)
})

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete profile for user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not delete profile for unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

