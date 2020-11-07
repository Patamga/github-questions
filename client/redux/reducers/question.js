import axios from 'axios'

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

export function getIssues(limit, skip) {
  return (dispatch) => {
    axios
      .get(`/api/v1/issue?limit=${limit}&skip=${skip}`)
      .then(({ data }) => {
        dispatch({ type: GET_ISSUES, issues: data.data })
      })
      .catch((err) => console.warn('server api', err))
  }
}
