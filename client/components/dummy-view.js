import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getIssues } from '../redux/reducers/question'
import List from './listQuestions'

const Dummy = () => {
  const list = useSelector((state) => state.question.issues)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getIssues())
    // setTimeout(()=>{
    //   dispatch(getIssues())
    // },2000)
  }, [])

  return (
    <div className="h-screen w-full bg-gray-200 m-0 px-2 py-4">
      {list.map((question) => (
        <List key={question.id} {...question} />
      ))}

      &nbsp;
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy

