const express = require('express');
const randomUsers = require('../../controllers/random.user');


const router = express.Router();



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

router.route('/').get(randomUsers.randomSingleUser)


// router.route('/:id')
// .get(limiter,randomUsers.getAllUsersById)

module.exports = router;