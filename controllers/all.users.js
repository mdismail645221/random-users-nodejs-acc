const allUsers = require('../controllers/random.user')

module.exports.allUsers = (req, res, next) => {
    res.status(200).send({
        success: true,
        data: allUsers
    })
}