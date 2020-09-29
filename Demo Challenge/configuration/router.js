const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/', controller.home)
router.get('/feed',controller.homePage)
router.post('/feed', controller.homePage)

router.get('/feed/:id',controller.showPage)


router.get('/delete/:id',controller.deleteElement)

router.get('/feed/edit/:id',controller.showElement)

router.post('/update/:id',controller.updateElement)



module.exports =  router


