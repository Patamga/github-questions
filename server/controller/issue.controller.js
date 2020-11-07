import Issue from '../models/issue'

const getList = (limit = 5, skip = 0) => {
  return Issue.find({}).skip(skip).limit(limit)
}
// .sort({ _id: -1 })

exports.getAll = async (req, res) => {
  try {
        // eslint-disable-next-line
        const limit = parseInt(req.query.limit)
        // eslint-disable-next-line
        const skip = parseInt(req.query.skip)
        const list = await getList(limit, skip)
        return res.json({ status: 'ok', data: list })
      } catch (err) {
    return res.status(500).json(err)
  }
}
