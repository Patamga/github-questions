import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIssues } from '../redux/reducers/question'
import List from './listQuestions'
import Pagination from './pagination'

const Dummy = () => {
  const list = useSelector((state) => state.question.issues)
  const limit = useSelector((state) => state.question.limit)
  const skip = useSelector((state) => state.question.skip)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIssues(limit, skip))
  }, [skip, limit])

  return (
    <div className="space-y-2h-screen w-full bg-gray-200 m-0 px-2 py-4 ">
      {list.map((question) => (
        <List key={question.id} {...question} />
      ))}
      <Pagination limit={limit} skip={skip} />
      &nbsp;
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
