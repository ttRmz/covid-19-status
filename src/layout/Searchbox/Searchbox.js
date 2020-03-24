import React from 'react'

export function Searchbox({ value, onChange }) {
  return (
    <nav className="Searchbox">
      <input
        placeholder="Find country"
        className="Searchbox__input"
        value={value}
        onChange={onChange}
      />
    </nav>
  )
}
