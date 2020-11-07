import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getIssues } from '../redux/reducers/question'
import List from './listQuestions'

const Dummy = () => {
  const list = useSelector((state) => state.question.issues)
  const dispatch = useDispatch()

  // const [issues, setIssues] = useState([])
  const [limit, setLimit] = useState(20)
  const [skip, setSkip] = useState(0)

  const nextPage = () => {
    setSkip(skip + limit)
  }

  const previousPage = () => {
    setSkip(skip - limit)
  }

  useEffect(() => {
    dispatch(getIssues(limit, skip))
    // setTimeout(()=>{
    //   dispatch(getIssues())
    // },2000)
  }, [skip, limit])

  return (
    <div className="h-screen w-full bg-gray-200 m-0 px-2 py-4">
      {list.map((question) => (
        <List key={question.id} {...question} />
      ))}
      <div>
        <div onClick={nextPage}> Previous Page </div>
        <div onClick={previousPage}> Next Page </div>
      </div>
      &nbsp;
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy

