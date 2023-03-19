const express = require('express');
const { body, validationResult } = require('express-validator');
const { userDelete } = require('../../controllers/user.delete');
const router = express.Router()



router.route('/').delete(

    // validate id
    body('Id').trim().escape()
    .notEmpty()
    .withMessage('NUMBER IS VALIDATE')
    .isLength({ max: 1 })
    .withMessage('id is required. its one character must be').isString().withMessage('please sending number in db')
    ,
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }
    , userDelete
)




module.exports = router;