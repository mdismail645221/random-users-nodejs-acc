const allUsers = require('../controllers/random.user')

module.exports.allUsers = (req, res, next) => {
    const {id} = req.query;
    res.status(200).send({
        success: true,
        data: allUsers.slice(0, id)
    })
}