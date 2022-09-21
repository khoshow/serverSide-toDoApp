const express = require('express')
const Task = require('../models/models')
const Type = require('../models/types')
const router = express.Router()

router.get('/', (req, res) => {
    Task.find((err, docs) => {
        if (err) console.log(err)
        res.json(docs)
    })
})

router.post('/', (req, res) => {
    console.log(req.body.formData)
    const task = new Task(req.body.formData)
    task.save((err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})

router.put('/:slug', (req, res) => {
    console.log("Hello there cmmon", req.body.formData)
    Task.findOneAndUpdate({
        _id: req.params.slug
    }, req.body.formData, {
        new: true
    }, (err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})

router.delete('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})

router.get('/:slug', async (req, res) => {
    console.log("Hello Slig us", req.params.slug)
    const task = await Task.findById(req.params.slug)
        .exec()

    console.log("Task ", task)
    res.json(task)

})




module.exports = router