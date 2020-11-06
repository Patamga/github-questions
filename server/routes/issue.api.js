import express from 'express'
import issueController from '../controller/issue.controller'

const router = express.Router()

router.get('/', issueController.getAll)
router.get('/:id', issueController.getOne)
router.post('/', issueController.create)
// router.patch('/:id', issueController.update)
// router.delete('/:id', issueController.delete)

module.exports = router
