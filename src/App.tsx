import React from 'react'

import { BrowserRouter as Router, Switch } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Content from './components/Content'

function App(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/" exact component={Content} />
      </Switch>
    </Router>
  )
}

export default App
