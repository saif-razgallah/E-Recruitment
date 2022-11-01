const router = require('express').Router() //route level not app level

const acceuilController = require('../controllers/acceuil.controller')

router.get('/',acceuilController.getHome)

module.exports = router