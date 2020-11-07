import React from 'react'
import { useDispatch } from 'react-redux'
import { setLimit, setSkip } from '../redux/reducers/question'

const Pagination = (props) => {
  const dispatch = useDispatch()
  console.log('propsP', props.skip, props.limit)
  return (
    <section className="flex justify-center">
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

      <button
        type="button"
        onClick={() => dispatch(setSkip(props.skip + props.limit))}
        className=" px-3 py-1 mr-10 border-2 border-gray-400 bg-gray-100 hover:bg-white text-blue-700 hover:text-blue-500"
      >
        Next
      </button>

      <div>
        Показывать по:
        <button
          type="button"
          onClick={() => dispatch(setLimit(5))}
          className=" px-3 py-1  text-blue-700 hover:text-blue-500"
        >
          5
        </button>
        <button
          type="button"
          onClick={() => dispatch(setLimit(10))}
          className=" px-3 py-1  text-blue-700 hover:text-blue-500"
        >
          10
        </button>
        <button
          type="button"
          onClick={() => dispatch(setLimit(20))}
          className=" px-3 py-1  text-blue-700 hover:text-blue-500"
        >
          20
        </button>
        <button
          type="button"
          onClick={() => dispatch(setLimit(30))}
          className=" px-3 py-1  text-blue-700 hover:text-blue-500"
        >
          30
        </button>
      </div>
    </section>
  )
}

Pagination.propTypes = {}

export default Pagination
