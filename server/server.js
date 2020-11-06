import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'
import axios from 'axios'
import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

import issueRoutes from './routes/issue.api'
import mongoose from './services/mongoose'
import Issue from './models/issue'

const Root = () => ''

// try {
//   // eslint-disable-next-line import/no-unresolved
//   // ;(async () => {
//   //   const items = await import('../dist/assets/js/root.bundle')
//   //   console.log(JSON.stringify(items))

//   //   Root = (props) => <items.Root {...props} />
//   //   console.log(JSON.stringify(items.Root))
//   // })()
//   console.log(Root)
// } catch (ex) {
//   console.log(' run yarn build:prod to enable ssr')
// }

let connections = []
mongoose.connect()
const port = process.env.PORT || 8090
const server = express()
const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]
middleware.forEach((it) => server.use(it))

server.use('/api/v1/issue', issueRoutes)

const getUrl = (i) => `https://api.github.com/search/issues?q=react+label:question+language:javascript+state:open&per_page=100&page=${i}`
const getData = async () => {
  for (let i = 1; i <= 10; i += 1) {
    setTimeout(() => {
      axios
        .get(getUrl(i))
        .then(({ data }) => {
          data.items.forEach(async (item) => {
            const issue = {
              id: item.id,
              html_url: item.html_url,
              title_issue: item.title,
              state: item.state,
              comments: item.comments,
              created_at: item.created_at,
              updated_at: item.updated_at,
              closed_at: item.closed_at,
              body: item.body
            }
            await Issue.updateOne({ id: issue.id }, { $set: issue }, { upsert: true })
            // axios
            //   .post('http://localhost:8087/api/v1/issue', {
            //     id: item.id,
            //     html_url: item.html_url,
            //     title_issue: item.title,
            //     state: item.state,
            //     comments: item.comments,
            //     created_at: item.created_at,
            //     updated_at: item.updated_at,
            //     closed_at: item.closed_at,
            //     body: item.body
            //   })
            //   .then((response) => response.status)
            //   .catch((err) => console.warn('server api', err))
          })
        })
        .catch((error) => {
          console.warn('github api', error)
        })
    }, 7000 * i)
  }
}

const callNTimes = (time) => {
  const callFn = () => {
    getData()
    setTimeout(callFn, time)
  }
  setTimeout(callFn, time)
}
callNTimes(1000*360*2)

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)

getData()