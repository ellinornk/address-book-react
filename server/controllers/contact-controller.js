const Contact = require ('../models/contact-model');

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



const getContacts = async (req, res) => {
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
    getContacts,
}