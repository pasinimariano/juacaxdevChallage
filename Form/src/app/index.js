import React from 'react'

const LandingPage = React.lazy(() => import('./pages/landingPage'))

export default function App () {
  return <LandingPage />
}
