import React from 'react'
import { useDispatch } from 'react-redux'
import { setSkip } from '../redux/reducers/question'

const Pagination = (props) => {
  const dispatch = useDispatch()
  return (
    <section className="flex justify-center pb-4">
      <button
        type="button"
        onClick={() => dispatch(setSkip(0))}
        disabled={props.skip <= 0}
        className=" px-4 py-1 mr-10 border-2 border-gray-400 disabled:opacity-50 bg-gray-100 hover:bg-white text-blue-700 hover:text-blue-500 "
      >
        Start
      </button>
      <button
        type="button"
        onClick={() => dispatch(setSkip(props.skip - props.limit))}
        disabled={props.skip <= 0}
        className=" px-4 py-1 mr-10 border-2 border-gray-400 disabled:opacity-50 bg-gray-100 hover:bg-white text-blue-700 hover:text-blue-500 "
      >
        Prev
      </button>

      <div className=" px-3 py-1 mr-10 border-2 border-gray-400 bg-gray-100 text-gray-700 ">
        <div>{`${props.skip} - ${props.skip + props.limit}`}</div>
      </div>

      <button
        type="button"
        onClick={() => dispatch(setSkip(props.skip + props.limit))}
        className=" px-3 py-1 mr-10 border-2 border-gray-400 bg-gray-100 hover:bg-white text-blue-700 hover:text-blue-500"
        disabled={props.skip >= props.countIssues - props.limit}
      >
        Next
      </button>

      <button
        type="button"
        onClick={() => dispatch(setSkip(props.countIssues - props.limit))}
        disabled={props.skip >= props.countIssues - props.limit}
        className=" px-4 py-1 mr-10 border-2 border-gray-400 disabled:opacity-50 bg-gray-100 hover:bg-white text-blue-700 hover:text-blue-500 "
      >
        End
      </button>
    </section>
  )
}

Pagination.propTypes = {}

export default Pagination
