import React from 'react'

const Filter = ({searched, handleSearch}) => {
  return (
    <div>
      filter shown with <input onChange={handleSearch} value={searched} />
    </div>
  )
}

export default Filter
