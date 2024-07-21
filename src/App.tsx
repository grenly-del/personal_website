
import { Provider } from 'react-redux'
import ConfigRoute from './config/routes'
import {store} from './app/store'

function App() {

  return (
    <Provider store={store}>
      <ConfigRoute /> 
    </Provider>
  )
}

export default App
