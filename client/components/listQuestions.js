import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'

const List = () => {
  const list = useSelector((state) => state.question.issues)
  console.log('list', list)
  const urlParse = (str) => {
    const re = /(\S+)\/(\S+)((\/issues)|(\/pull))/
    const [all, user, repo] = str.match(re)
    return { all, user, repo }
  }
  const dateFormat = (date) => format(new Date(date), 'dd LLL y')
  return (
    <div className="bg-gray-200 m-0 px-2 py-4">
      {console.log('is', list)}
      {list.map((question) => {
        console.log('is', question)
        return (
          <div key={question.id} className=" mb-4 border-2 border-solid border-gray-400 bg-white ">
            <div className=" flex flex-row ">
              <div className="flex text-sm text-gray-600 pl-4 pt-2 w-full border-r-2 border-gray-400 content-center">
                <span>Question: </span>
                <a href={question.html_url} className="  text-blue-700 ">
                  {console.log(question.html_url)}
                  {question.title_issue}
                </a>
              </div>
              <div className="p-2 w-20  border-gray-400 text-teal-600"> {question.state}</div>
            </div>
            <div className="p-2 text-sm text-gray-800 h-full border-t-2 border-b-2 border-gray-400 overflow-x-scroll">
              <ReactMarkdown source={question.body} />
            </div>
            <div className=" text-sm text-gray-600 flex flex-row">
              <div className="flex flex-col pl-2 py-2 w-full border-r-2 border-gray-400">
                <span>
                  Project: <span className="text-gray-800">{urlParse(question.html_url).repo}</span>
                </span>
                {/* <span>
                  User: <span className="text-gray-800">{urlParse(question.html_url).user}</span>
                </span> */}
              </div>
              <div className="flex flex-col pl-2 py-2 w-full border-r-2 border-gray-400">
                <span>
                  created: <span className="text-gray-800">{dateFormat(question.created_at)}</span>
                </span>
                <span>
                  updated:<span className="text-gray-800">{dateFormat(question.updated_at)}</span>
                </span>
              </div>
              <div className="pl-2 py-2 w-64  border-gray-400">comments: {question.comments}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

List.propTypes = {}

export default List
