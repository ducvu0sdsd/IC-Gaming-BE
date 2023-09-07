const express = require('express')
const router = express.Router()
const modController = require('../app/controllers/ModController')


router.get('/mod-api-v1', modController.api)
router.get('/get-by-origin', modController.findByOrigin)
router.post('/insert', modController.insert)
router.get('/getById', modController.findById)
router.post('/delete', modController.delete)
router.post('/update', modController.update)

module.exports = router