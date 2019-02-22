import React from 'react'

import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import { withRouter } from 'react-router-dom'
import './styles/index.scss'

import Header from './components/Header/Header.js'
import SearchResults from './containers/Search/SearchResults.js'
import ItemDetailResult from './containers/Item/ItemDetailResult.js'

const App = () => {
  return (
    <div className="container">
      <Header />
      <main role="main">
        <div className="ml-content">
          <Switch>
            <Route exact path="/" />
            <Route exact path="/items" component={SearchResults} />
            <Route path="/item/:id" component={ItemDetailResult} />
            <Route render={() => <div>404 - Ruta no encontrada</div>} />
          </Switch>
        </div>
      </main>
    </div>
  )
}

export default withRouter(hot(module)(App))
