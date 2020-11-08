import axios from 'axios'

const GET_ISSUES = 'GET_ISSUES'
const SET_LIMIT = 'SET_LIMIT'
const SET_SKIP = 'SET_SKIP'
const SET_COUNT = 'SET_COUNT'

const initialState = {
  issues: [],
  limit: 10,
  skip: 0,
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ISSUES: {
      return { ...state, issues: action.issues }
    }
    case SET_LIMIT: {
      return { ...state, limit: action.limit }
    }
    case SET_SKIP: {
      return { ...state, skip: action.skip }
    }
    case SET_COUNT: {
      return { ...state, count: action.count }
    }
    default:
      return state
  }
}

export function getIssues() {
  return (dispatch, getState) => {
    const limitQ = getState().question.limit
    const skipQ = getState().question.skip
    axios
      .get(`/api/v1/issue?limit=${limitQ}&skip=${skipQ}`)
      .then(({ data }) => {
        dispatch({ type: GET_ISSUES, issues: data.data })
      })
      .catch((err) => console.warn('server api', err))
  }
}
export function setLimit(limit) {
  return { type: SET_LIMIT, limit }
}
export function setSkip(skip) {
  return { type: SET_SKIP, skip }
}
export function getCount() {
  return (dispatch) => {
    axios
      .get(`/api/v1/issue/count`)
      .then(({ data }) => {
        dispatch({ type: SET_COUNT, count: data.data })
      })
      .catch((err) => console.warn('server api count', err))
  }
}