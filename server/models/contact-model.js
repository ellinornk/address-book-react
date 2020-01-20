const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Contact = new Schema(
    {
        name: { type: String, required: [true, 'Name cannot be empty'] },
        surname: { type: String, required: [true, 'Surname cannot be empty'] },
        email: { type: String, required: [true, 'Email cannot be empty'] },
    },
    { timestamps: true },
)

module.exports = mongoose.model('contacts', Contact)