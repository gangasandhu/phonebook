import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personsService.getAll()
      .then(persons => setPersons(persons))
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searched, setSearched] = useState('')

  const filteredPersons = searched ? persons.filter(person => person.name.toLowerCase().includes(searched.toLowerCase())) : persons

  const handleName = (e) => {
    const name = e.target.value
    setNewName(name);
  }

  const handleNumber = (e) => {
    const number = e.target.value
    setNewNumber(number);
  }

  const handleSearch = (e) => {
    const name = e.target.value
    setSearched(name)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} alredy exists`)
      return
    }
    personsService
      .create(person)
      .then(person => {
        setPersons([...persons, person])
        setNewName('')
        setNewNumber('')
      })

  }

  const deletePerson = (id) => {
    personsService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(person => person.id != id))
        // console.log(personId)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searched={searched} handleSearch={handleSearch} />

      <h2>add a new</h2>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>

      <Persons persons={filteredPersons} deletePerson={deletePerson} />

    </div>
  )
}

export default App