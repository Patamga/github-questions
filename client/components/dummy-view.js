import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getIssues } from '../redux/reducers/question'

const Dummy = () => {
  const dispatch = useDispatch()
  // const list = useSelector((store) => store.guestion.issues)
  // console.log(list)

  useEffect(() => {
    dispatch(getIssues())
  }, [])
  return (
    <div className="h-screen w-full bg-gray-200 m-0 px-2 py-4">
      &nbsp;
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy

