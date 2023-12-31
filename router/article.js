const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')
const app = express()
//CRUD
router.get('/', articleController.index)
router.get('/:id', articleController.readOne)

router.post('/', articleController.create)
router.put('/:id', articleController.update)
router.delete('/:id', articleController.destroy)

module.exports = router