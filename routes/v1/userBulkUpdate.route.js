const express = require('express');
const  userBulkUpdate = require('../../controllers/user.updateBulk');

const router = express.Router()



/**
 * @api {get} ./user all tools
 * @apiDescription get all the users
 * @apiPermission admin
 * 
 * @apiHeader   {string}    Authentication user's access token
 * 
 * @apiParam {Number{1-}}       [page=1]    List page
 * @apiParam {Number{1-100}}     [page=10]      User per page
 * 
 * @apiSuccess {Object[]}   all the tools
 * @apiError {unAuthentication 401}     unAuthentication only
 * @apiError {forbidden 403}
 */

router.route('/')
.get(userBulkUpdate.updateBulk)



module.exports = router;