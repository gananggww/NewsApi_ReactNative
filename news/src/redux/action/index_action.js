import axios from 'axios'
const API_KEY = '9185fb82127c434888606c7b8db7384d'

export const actionNewsList = (payload) => {
  return {
    type: 'NEWS_LIST',
    payload
  }
}


export const actionPassURI = (payload) => {
  return {
    type: 'PASS_URI',
    payload
  }
}

export const actionEventSearch = (payload) => {
  return {
    type: 'SEARCH',
    payload
  }
}


export const newsList = () => {
  return (dispatch, getState) => {
    const url = `https://newsapi.org/v2/top-headlines?country=id&category=sport&apiKey=${API_KEY}`
    axios.get(url)
    .then(resp => {
      dispatch(actionNewsList(resp.data.articles))
    }).catch(err => console.log(err))
  }
}

export const passURI = (payload) => {
  return (dispatch, getState) => {
      dispatch(actionPassURI(payload))
  }
}
