import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/styles.scss'

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse' />
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'))

function App () {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            path='/'
            name='Home'
            render={(props) => <TheLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  )
}

export default App
