const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/userRoutes')
const taskRouter = require('./routers/taskRoutes')

const app = express();
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is running up on port ${port}`);
})