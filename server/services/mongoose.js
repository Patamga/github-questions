import mongoose from 'mongoose'
import config from '../config'

mongoose.connection.on('connected', () => {
  console.log('db is connected !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
})

mongoose.connection.on('error', (err) => {
  console.log(`can not connect to db ${err}`)
  process.exit(1)
})

exports.connect = async (mongoURL = config.mongoURL) => {
  mongoose.connect(mongoURL, {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: false
  })
  return mongoose.connection
}
