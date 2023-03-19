const express = require('express')
const saveUser = require('../../controllers/user.save');
const { body, validationResult } = require('express-validator');
const userSaveValidation = require('../../middleware/userSaveValidation');

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
.post(
    // validation Id
    body("Id").trim().isString().withMessage("Id  is missing."),
    // validation gender
    body("gender").trim().notEmpty().withMessage("gender is missing"),
    // validation name
    body("name").trim().notEmpty().withMessage("name is missing"),
    // validation contact
    body("contact").trim().notEmpty().withMessage("contact is missing"),
    // validation address
    body("address").trim().notEmpty().withMessage("address is missing"),
    // validation photoUrl
    body("photoUrl").trim().notEmpty().withMessage("photoUrl is missing"),

    // middleware function for validation
    userSaveValidation,

    saveUser.userSaveInfo)



module.exports = router;