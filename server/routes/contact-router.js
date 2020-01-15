const express = require('express')

const ContactsController = require('../controllers/contact-controller')

const router = express.Router()

router.post('/contact', ContactsController.createContact)

router.get('/contacts', ContactsController.getContacts)


module.exports = router