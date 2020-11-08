import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIssues, getCount } from '../redux/reducers/question'
import List from './listQuestions'
import Pagination from './pagination'
import Header from './header'

const Dummy = () => {
  const list = useSelector((state) => state.question.issues)
  const limit = useSelector((state) => state.question.limit)
  const skip = useSelector((state) => state.question.skip)
  const countIssues = useSelector((state) => state.question.count)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIssues(limit, skip))
    dispatch(getCount())
    window.scrollTo(0, 0)
  }, [skip, limit])

  return (
    <div className="space-y-2h-screen w-full bg-gray-200 m-0 px-2 pt-4 ">
      <Header limit={limit} skip={skip} countIssues={countIssues} />
      {skip >= limit && <Pagination limit={limit} skip={skip} countIssues={countIssues} />}
      {list.map((question) => (
        <List key={question.id} {...question} />
      ))}
      <Pagination limit={limit} skip={skip} countIssues={countIssues} />
      &nbsp;
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
