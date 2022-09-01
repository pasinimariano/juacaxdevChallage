import React from 'react'
import ReactDOM from 'react-dom/client'

const Root = ReactDOM.createRoot(document.getElementById('root'))
const App = React.lazy(() => import('./app'))

Root.render(<App />)
