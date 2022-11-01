const router = require('express').Router()
const check = require('express-validator').check
const multer = require('multer')
const bodyParser = require('body-parser')

const adminController = require('../controllers/admin.controller')

const adminGuard = require('./guards/admin.guard')


module.exports = router