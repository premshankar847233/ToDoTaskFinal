const express = require('express');
const router = express.Router();

const {addwork,getWork,deleteWork} = require('./todoController')

router.route('/addwork').post(addwork)
router.route('/getwork').get(getWork)
router.route('/deletework/:id').delete(deleteWork)

module.exports = router;