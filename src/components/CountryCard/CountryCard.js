import React from 'react'

export function CountryCard({ value }) {
  return (
    <div className="CountryCard">
      <h4 className="CountryCard__country">{value.Country}</h4>
      <ul>
        <li className="CountryCard__metric">
          {value.TotalConfirmed} total cases
        </li>
        <li className="CountryCard__metric">
          {value.TotalConfirmed - value.TotalRecovered - value.TotalDeaths}{' '}
          active cases
        </li>
        <li className="CountryCard__metric">
          {value.TotalRecovered} recovered
        </li>
        <li className="CountryCard__metric">{value.TotalDeaths} deaths</li>
      </ul>
    </div>
  )
}
