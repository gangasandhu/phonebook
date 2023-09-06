import React from 'react'

const PersonForm = ({newName, newNumber, handleName, handleNumber, addPerson}) => {

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handleName} value={newName} />
                </div>
                <div>number: <input onChange={handleNumber} value={newNumber} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
