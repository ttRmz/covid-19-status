import classNmaes from 'classnames'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useFollowingCountriesContext } from '../../contexts/follow'
import { getCountryId } from '../../utils/getCountryId'
import { Icon } from '../Icon'

export function CountryCard({ value }) {
  const { t } = useTranslation()
  const { follow, unfollow, countries } = useFollowingCountriesContext()

  const countryId = getCountryId(value)
  const starred = countries.includes(countryId)

  return (
    <div className="CountryCard">
      <h4 className="CountryCard__country">{value.Country}</h4>

      <button
        onClick={() => {
          starred ? unfollow(countryId) : follow(countryId)
        }}
        className={classNmaes('CountryCard__star', {
          'CountryCard__star--filled': starred,
        })}
      >
        <Icon name={`star-${starred ? 'solid' : 'regular'}`} />
      </button>

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
