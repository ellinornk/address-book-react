const Contact = require ('../models/contact-model');

//Create contact
const createContact = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'oops something went wrong',
        })
    }

    const contact = new Contact(body)

    if (!contact) {
        return res.status(400).json({ success: false, error: 'There is not contact' })
    }

    contact
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: contact._id,
                message: 'Contact created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Contact not created! :(',
            })
        })
}


//Update contact
const updateContact = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Contact.findOne({ _id: req.params.id }, (err, contact) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Contact not found!',
            })
        }
        contact.name = body.name
        contact.surname = body.surname
        contact.email = body.email
        contact
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: contact._id,
                    message: 'Contact updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Contact not updated!',
                })
            })
    })
}

//Delete contact
const deleteContact = async (req, res) => {
    await Contact.findOneAndDelete({ _id: req.params.id }, (err, contact) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!contact) {
            return res
                .status(404)
                .json({ success: false, error: `Contact not found` })
        }

        return res.status(200).json({ success: true, data: contact })
    }).catch(err => console.log(err))
}

//Get all
const getContacts = async (req, res) => {
    console.log('REQUEST ::: ', req)
    console.log('RES ::: ', res)
    await Contact.find({}, (err, contacts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!contacts.length) {
            return res
                .status(404)
                .json({ success: false, error: `No contacts found` })
        }
        return res.status(200).json({ success: true, data: contacts })
    }).catch(err => console.log(err))
}


module.exports = {
    createContact,
    deleteContact,
    updateContact,
    getContacts,
}