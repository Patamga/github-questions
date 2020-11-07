import Issue from '../models/issue'

// exports.getAll = async (req, res) => {
//   const list = await Issue.find({})
//   return res.json({ status: 'ok', data: list })
// }

const getList = (limit = 0, skip = 0) => {
  return Issue.find({}).skip(skip).limit(limit)
}

exports.getAll = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit)
    const skip = parseInt(req.query.skip)
    const users = await getList(limit, skip)

    return res.status(200).json(users)
  } catch (e) {
    return res.status(500).json(e)
  }
}

// class UserPaginationExample {
//     getAll(limit = 0, skip = 0) {
//         return UsersModel.find({})  // You may want to add a query
//                         .skip(skip) // Always apply 'skip' before 'limit'
//                         .limit(limit) // This is your 'page size'
//     }
// }

// async getAllUser (req, res) {
//     try {
//       const limit = parseInt(req.query.limit); // Make sure to parse the limit to number
//       const skip = parseInt(req.query.skip);// Make sure to parse the skip to number

//       // We are using the '3 layer' architecture explored on the 'bulletproof node.js architecture'
//       // Basically, it's just a class where we have our business logic
//       const userService = new userService();
//       const users = await userService.getAll(limit, skip);

//       return res.status(200).json(users);
//     } catch(e){
//       return res.status(500).json(e)
//     }
// }
