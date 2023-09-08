const express = require('express')
const router = express.Router()
const modController = require('../app/controllers/ModController')
const fileUploader = require('../config/uploader');

router.get('/mod-api-v1', modController.api)
router.get('/get-by-origin', modController.findByOrigin)
router.post('/insert', fileUploader.array('images'), modController.insert)
router.get('/getById', modController.findById)
router.get('/get-by-criteria-origin', modController.findByOrigin_Criteria)
router.post('/delete', modController.delete)
router.post('/update', modController.update)
router.post('/update-downloads', modController.updateDownloads)
module.exports = router