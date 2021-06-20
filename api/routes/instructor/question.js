const express = require('express')
const router = express.Router();
const questionController = require('../../controllers/instructor/questionController');
const {Question} = require('../../models/question.js');

const instructorAuth = require('../../middlewares/instructor/auth')
//auth
router.get('/',instructorAuth,questionController.all);
router.post('/create',instructorAuth,questionController.create);
router.post('/update/:id',instructorAuth,questionController.update);
router.post('/archive/:id',instructorAuth,questionController.setArchived);
router.delete('/delete/:id',instructorAuth,questionController.delete);

module.exports = router;