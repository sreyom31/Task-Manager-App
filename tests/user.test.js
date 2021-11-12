const request = require('supertest')
const app = require('../src/app')

test('Should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Sreyom',
        email: 'sreyom@example.com',
        password: 'Mypass777!'
    }).expect(201)
})