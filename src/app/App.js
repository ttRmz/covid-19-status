import React from 'react'
import { Progress } from '../components'
import { Footer } from '../layout/Footer'

const Home = React.lazy(() => import('../pages/Home'))

export function App() {
  return (
    <React.Suspense fallback={<Progress />}>
      <Home />
      <Footer />
    </React.Suspense>
  )
}
