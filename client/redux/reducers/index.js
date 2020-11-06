import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import question from './question'


const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    question
  })

export default createRootReducer
