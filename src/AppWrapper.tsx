import React from 'react'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// I need to create a wrapper, so I can use the provider store in App component.
const AppWrapper : React.FC = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

export default AppWrapper;
