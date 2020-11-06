const GET_ISSUES = 'GET_ISSUES'

const initialState = {
  issues: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ISSUES: {
      return { ...state, issues: action.issues }
    }
    default:
      return state
  }
}

export function getIssues() {
  return (dispatch) => {
    fetch('/api/v1/issue')
      .then((res) => res.json())
      .then(({ data }) => {
        console.log('dta', data)
        dispatch({ type: GET_ISSUES, issues: data })
      })
      .catch((err) => console.warn('server api', err))
  }
}
