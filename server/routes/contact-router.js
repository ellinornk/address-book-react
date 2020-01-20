const express = require('express')

const ContactsController = require('../controllers/contact-controller')

const router = express.Router()

router.post('/contact', ContactsController.createContact)

router.put('/contact/:id', ContactsController.updateContact)

router.delete('/contact/:id', ContactsController.deleteContact)

router.get('/contacts', ContactsController.getContacts)


module.exports = router