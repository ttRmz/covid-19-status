import { useQuery } from 'react-query'

const fetchResponse = async param => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${param}`)
  const data = await response.json()

  return data
}

export function useSummary() {
  return useQuery('summary', fetchResponse)
}
