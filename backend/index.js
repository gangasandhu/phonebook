const express = require("express");
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

const persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get("/", (req, res) => {
    res.send("ramanjot singh ghumaan ")
})

app.get("/api/persons", (req, res) => {
    res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(402).end()
    }
})

app.delete("/api/persons/:id", (req, res) => {
    const id = parseInt(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.redirect('/')
})

app.post("/api/persons", (req, res) => {
    const new_person = {
        "id": parseInt(Math.random()*1000),
        "name": "Ganga Singh",
        "number": "123-123-1234"
    }

    res.json(new_person)
})

app.get("/info", (req, res) => {

    res.send(`Phonebook has info for ${persons.length} people <br>${new Date()}`)

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("server started successfully")
})