import React from 'react'
import { getCountryId } from '../../utils/getCountryId'
import { CountryCard } from '../CountryCard'

export function Results({ data, global }) {
  return (
    <div className="Results">
      {data.map(country => (
        <CountryCard
          key={getCountryId(country)}
          value={country}
          global={global}
        />
      ))}
    </div>
  )
}
