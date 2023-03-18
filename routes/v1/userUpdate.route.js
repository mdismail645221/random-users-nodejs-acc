const express = require('express');
const  userUpdate  = require('../../controllers/user.update');

const router = express.Router()



router.route('/').patch(userUpdate.userUpdate)



module.exports = router;