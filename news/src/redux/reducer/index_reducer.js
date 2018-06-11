const defaultState = {
  newsList: [],
  uri:{},
  eventSearch: ''
}

const news = (state=defaultState, action) => {
  switch (action.type) {
    case 'NEWS_LIST':
      return {...state, newsList: action.payload}
    case 'PASS_URI':
      return {...state, uri: action.payload}
    case 'SEARCH':
      return {...state, eventSearch: action.payload}
    default:
    return state
  }
}

export default news
