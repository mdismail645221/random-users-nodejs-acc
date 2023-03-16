const express = require('express');
const userControllers = require('../../controllers/user.controllers');
const limiter = require('../../middleware/limiter');

const router = express.Router();



/**
 * @api {get} ./user all tools
 * @apiDescription get all the users
 *  @apiPermission admin
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

// router.get('/', (req, res)=> {
//     console.log('user route is running')
//     res.send({
//         message: 'successfully hited rotue'
//     })
// })

router.route('/')
.get(userControllers.getAllUsers)
.post()

router.route('/:id')
.get(limiter,userControllers.getAllUsersById)

module.exports = router;


