

const express = require('express')
const Type = require('../models/types')
const router = express.Router()

// Types
router.get('/', (req, res) => {
    Type.find((err, docs) => {
        if (err) console.log(err)    
        res.json(docs)
    })
})


router.post('/', (req, res) => {
   
    const typeTitle = req.body.typeTitle
    const type = new Type({typeTitle:typeTitle})
    type.save((err, doc) => {
        if (err) console.log(err)
        res.json(doc)
    })
})




module.exports = router