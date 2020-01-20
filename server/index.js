const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 8001
const db = require('./db')
const contactsRouter = require('./routes/contact-router')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Wazzzap!')
})

app.use('/api', contactsRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
