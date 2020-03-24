import { formatRelative } from 'date-fns'
import matchSorter from 'match-sorter'
import React from 'react'
import { Icon, Results } from '../components'
import { Spinner } from '../components/Spinner'
import { Footer } from '../layout/Footer'
import { Searchbox } from '../layout/Searchbox'
import { useSummary } from '../server/summary'
import { useInput } from '../utils/useInput'

export function App() {
  const { value: search, onChange: setSearch } = useInput('')
  const { data, status } = useSummary()

  const statusResult = {
    loading: () => <Spinner className="App__loader" />,
    error: () => 'there was an error... sorry',
    success: data => {
      const sortedList = matchSorter(data.Countries, search, {
        keys: ['Country', 'Slug'],
      })

      return (
        <>
          <h4>
            Last updated : {formatRelative(new Date(data.Date), new Date())}
          </h4>

          <Results data={sortedList} />
        </>
      )
    },
  }

  return (
    <main className="App">
      <h1 className="App__title">
        <Icon name="virus-solid" />
        {process.env.REACT_APP_NAME}
      </h1>

      <Searchbox value={search} onChange={setSearch} />

      {statusResult[status](data)}

      <Footer />
    </main>
  )
}
