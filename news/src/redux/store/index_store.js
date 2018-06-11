import { createStore, applyMiddleware } from 'redux'
import news from '../reducer/index_reducer.js'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const midty = applyMiddleware(logger, thunk)
const store = createStore(news, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ,midty)

export default store
