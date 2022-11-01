const router = require('express').Router() //route level not app level

const candidatureController = require('../controllers/candidature.controller')

router.get('/',candidatureController.getCandidature)

module.exports = router