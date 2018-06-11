export const searchTitle = ({ newsList, eventSearch }) => {
  let filterEventTrim = eventSearch.trim().toLowerCase()
  if (filterEventTrim === '')
    return newsList
  else
    return newsList.filter(item => item.title.toLowerCase().includes(filterEventTrim))
}
