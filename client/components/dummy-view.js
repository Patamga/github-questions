import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getIssues } from '../redux/reducers/question'
import List from './listQuestions'

const Dummy = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIssues())
    setTimeout(()=>{
      dispatch(getIssues())
    },2000)
  }, [])

  return (
    <div className="h-screen w-full bg-gray-200 m-0 px-2 py-4">
      <List />
      &nbsp;
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy

