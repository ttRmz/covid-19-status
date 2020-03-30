import classNames from 'classnames'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useFollowingCountriesContext } from '../../contexts/follow'
import { getCountryId } from '../../utils/getCountryId'
import { Icon } from '../Icon'

export function CountryCard({ value, global }) {
  const { t } = useTranslation()
  const { follow, unfollow, countries } = useFollowingCountriesContext()

  const countryId = getCountryId(value)
  const starred = countries.includes(countryId)

  return (
    <div
      className={classNames('CountryCard', {
        'CountryCard--highlighted': global,
      })}
    >
      <h4 className="CountryCard__country">{value.Country}</h4>

      {!global && (
        <button
          onClick={() => {
            starred ? unfollow(countryId) : follow(countryId)
          }}
          className={classNames('CountryCard__star', {
            'CountryCard__star--filled': starred,
          })}
        >
          <Icon name={`star-${starred ? 'solid' : 'regular'}`} />
        </button>
      )}

      <ul>
        <li className="CountryCard__metric">
          <i>
            {value.TotalConfirmed} {t('metric.active')}{' '}
          </i>{' '}
          {value.NewConfirmed > 0 &&
            `(+ ${value.NewConfirmed} ${t('metric.today')})`}
        </li>

        <li className="CountryCard__metric">
          <i>
            {value.TotalRecovered} {t('metric.recovered')}
          </i>{' '}
          {value.NewRecovered > 0 &&
            `(+ ${value.NewRecovered} ${t('metric.today')})`}
        </li>

        <li className="CountryCard__metric">
          <i>
            {value.TotalDeaths} {t('metric.death')}
          </i>{' '}
          {value.NewDeaths > 0 && `(+ ${value.NewDeaths} ${t('metric.today')})`}
        </li>
      </ul>
    </div>
  )
}
