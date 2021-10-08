import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import * as config from './config'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Auth0Provider
        domain={config.auth0Domain}
        clientId={config.auth0ClientId}
        audience={config.auth0Audience}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
