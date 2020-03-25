import { formatRelative } from 'date-fns'
import { enUS, fr } from 'date-fns/locale'
import matchSorter from 'match-sorter'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Icon, Results } from '../components'
import { Spinner } from '../components/Spinner'
import { Searchbox } from '../layout/Searchbox'
import { useSummary } from '../server/summary'
import { useInput } from '../utils/useInput'

const LOCALES = { fr, en: enUS }

export default function Home() {
  const { value: search, onChange: setSearch } = useInput('')
  const { data, status } = useSummary()
  const { t, i18n } = useTranslation()

  const [language] = i18n.language.split('-')

  const statusResult = {
    loading: () => <Spinner className="Home__loader" />,
    error: () => 'there was an error... sorry',
    success: data => {
      const sortedList = matchSorter(data.Countries, search.trim(''), {
        keys: ['Country', 'Slug'],
      })

      return (
        <>
          <h4>
            {t('update')} :{' '}
            {formatRelative(new Date(data.Date), new Date(), {
              locale: LOCALES[language],
            })}
          </h4>

          <Results data={sortedList} />
        </>
      )
    },
  }

  return (
    <main className="Home">
      <h1 className="Home__title">
        <Icon name="virus-solid" />
        {t('title')}
      </h1>

      <Searchbox value={search} onChange={setSearch} />

      {statusResult[status](data)}
    </main>
  )
}
