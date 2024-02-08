const express = require('express');
const Cheese = require('../models/cheese');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        //before
        // const listofallpeople = await People.find({})
        // res.json(listofallpeople)
        //after
        res.json(await Cheese.find({}))

    } catch (err) {
        res.status(400).json(err);
    }
})


router.post('/', async (req, res) => {
    try {
        res.json(await Cheese.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})


router.delete('/:id', async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})


router.get('/:id', async (req, res) => {
    try {
        res.json(await Cheese.findById(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})

router.put('/:id', async (req, res) => {
    try {

        res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})

 

module.exports = router;