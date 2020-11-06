import mongoose from 'mongoose'


const issueSchema = new mongoose.Schema({
  id: String,
  html_url: String,
  title_issue: String,
  state: String,
  comments: Number,
  created_at: Date,
  updated_at: Date,
  closed_at: Date,
  body: String
})

export default mongoose.model('issues', issueSchema)
