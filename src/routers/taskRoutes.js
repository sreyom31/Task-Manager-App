const { Router } = require('express');
const Task = require('../models/task')
const authMiddleware = require('../middlewares/authMiddleware')
const router = Router()

router.post('/tasks', authMiddleware, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', authMiddleware, async (req, res) => {
    const match = {}

    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }

    try {
        const tasks = await Task.find({owner: req.user._id, match }) 
        // await req.user.populate('tasks').execPopulate() //! this also works
        // res.send(req.user.tasks) //* this is for this previous commented line
        res.send(tasks) 
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
})

router.get('/tasks/:id', authMiddleware, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({ _id, owner: req.user._id })
        if(!task) {
            return res.status(404).send('Task not found')
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', authMiddleware, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates!' })
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

        if(!task) {
            return res.status(404).send('Task not found')
        }

        updates.forEach(update => task[update] = req.body[update])
        await task.save()

        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByOneAndDelete({ _id: req.params.id, owner: req.user._id })
        if(!task) {
            return res.status(404).send('Task not found')
        }
        res.send(task)
    } catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router