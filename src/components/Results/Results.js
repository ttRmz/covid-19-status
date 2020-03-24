import React from 'react'
import { CountryCard } from '../CountryCard'

export function Results({ data }) {
  return (
    <section className="Results">
      {data.map(value => (
        <CountryCard key={`${value.Country}-${value.Slug}`} value={value} />
      ))}
    </section>
  )
}
