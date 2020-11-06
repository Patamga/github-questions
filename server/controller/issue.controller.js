
import Issue from '../models/issue'

exports.getAll = async (req, res) => {
  const list = await Issue.find({})
  return res.json({ status: 'ok', data: list })
}

