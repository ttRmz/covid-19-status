import React from 'react'
import { useTranslation } from 'react-i18next'

export function CountryCard({ value }) {
  const { t } = useTranslation()

  return (
    <div className="CountryCard">
      <h4 className="CountryCard__country">{value.Country}</h4>
      <ul>
        <li className="CountryCard__metric">
          {value.TotalConfirmed} {t('metric.total')}
        </li>
        <li className="CountryCard__metric">
          {value.TotalConfirmed - value.TotalRecovered - value.TotalDeaths}{' '}
          {t('metric.active')}
        </li>
        <li className="CountryCard__metric">
          {value.TotalRecovered} {t('metric.recovered')}
        </li>
        <li className="CountryCard__metric">
          {value.TotalDeaths} {t('metric.death')}
        </li>
      </ul>
    </div>
  )
}
