import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, StaticRouter } from 'react-router-dom'
import 'typeface-roboto'
import store, { history } from '../redux'
import DummyView from '../components/dummy-view'
import NotFound from '../components/404'
import Startup from './startup'

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <RouterSelector history={history} location={props.location} context={props.context}>
        <Startup>
          <Switch>
            <Route exact path="/" component={() => <DummyView />} />
            <Route exact path="/*" component={() => <DummyView />} />


            <Route component={() => <NotFound />} />
          </Switch>
        </Startup>
      </RouterSelector>
    </Provider>
  )
}

export default RootComponent
