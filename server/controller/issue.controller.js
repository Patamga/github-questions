
import Issue from '../models/issue'

exports.getAll = async (req, res) => {
  const list = await Issue.find({})
  return res.json({ status: 'ok', data: list })
}

exports.getOne = async (req, res) => {
  const guestion = await Issue.findOne({ id: req.params.id })
  return res.json({ status: 'ok', data: guestion })
}

exports.create = async (req, res) => {
  const issue = req.body
  await Issue.updateOne({ id: req.body.id }, { $set: issue }, { upsert: true })
  // await issue.save()
  return res.json({ status: 'ok', data: issue })
}
