import React from 'react'
import { useDispatch } from 'react-redux'
import { setLimit } from '../redux/reducers/question'

const Pagination = (props) => {
  const dispatch = useDispatch()
  const totalPage = Math.ceil(props.countIssues / props.limit)
  const page = Math.ceil(props.skip / props.limit + 1)
  return (
    <div className="flex justify-center text-sm text-gray-700 pb-4">
      <div className="px-4">
        Page: <span className="text-gray-900 font-bold">{page}</span>
      </div>
      <div className="px-4">
        Total pages: <span className="text-gray-900 font-bold">{totalPage}</span>
      </div>
      <div className="px-4">
        Total question: <span className="text-gray-900 font-bold">{props.countIssues}</span>
      </div>

      <div className="px-4 flex">
        <div clasName="">Show per page</div>
        <div clasName="">
          <button
            type="button"
            onClick={() => dispatch(setLimit(5))}
            className=" px-1   text-blue-700 hover:text-blue-500"
          >
            5
          </button>
          <button
            type="button"
            onClick={() => dispatch(setLimit(10))}
            className=" px-1   text-blue-700 hover:text-blue-500"
          >
            10
          </button>
          <button
            type="button"
            onClick={() => dispatch(setLimit(20))}
            className=" px-1 text-blue-700 hover:text-blue-500"
          >
            20
          </button>
          <button
            type="button"
            onClick={() => dispatch(setLimit(30))}
            className=" px-1 text-blue-700 hover:text-blue-500"
          >
            30
          </button>
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {}

export default Pagination
