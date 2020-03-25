import React from 'react'

const FOLLOWING_COUNTRIES_LOCAL_STORAGE_KEY =
  'covid19status-following-countries'

const FollowingCountriesContext = React.createContext({})

export function useFollowingCountriesContext() {
  return React.useContext(FollowingCountriesContext)
}

export function FollowingCountriesProvider({ value, ...rest }) {
  const [followingCountries, setFollowingCountries] = React.useState(
    initalize(),
  )

  const handleFollowCountry = React.useCallback(
    countriesId => {
      setFollowingCountries(prev => {
        const countries = [...prev, countriesId]

        localStorage.setItem(
          FOLLOWING_COUNTRIES_LOCAL_STORAGE_KEY,
          JSON.stringify({ countries }),
        )

        return countries
      })
    },
    [setFollowingCountries],
  )

  const handleUnfollowCountry = React.useCallback(
    countriesId => {
      setFollowingCountries(prev => {
        const countries = prev.filter(id => id !== countriesId)

        localStorage.setItem(
          FOLLOWING_COUNTRIES_LOCAL_STORAGE_KEY,
          JSON.stringify({ countries }),
        )

        return countries
      })
    },
    [setFollowingCountries],
  )

  const values = React.useMemo(
    () => ({
      countries: followingCountries,
      follow: handleFollowCountry,
      unfollow: handleUnfollowCountry,
    }),
    [handleFollowCountry, followingCountries, handleUnfollowCountry],
  )

  return <FollowingCountriesContext.Provider value={values} {...rest} />
}

function initalize() {
  const storedFollowingCountries = localStorage.getItem(
    FOLLOWING_COUNTRIES_LOCAL_STORAGE_KEY,
  )

  if (storedFollowingCountries) {
    try {
      const { countries } = JSON.parse(storedFollowingCountries)
      return countries
    } catch {
      localStorage.removeItem(FOLLOWING_COUNTRIES_LOCAL_STORAGE_KEY)
    }
  }

  return []
}
