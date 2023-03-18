const allUsers = require('../controllers/random.user')

module.exports.allUsers = (req, res, next) => {
    const {Id} = req.query;
    if(Id){
        res.status(200).send({
            success: true,
            data: allUsers.slice(0, Id)
        })
    }else{
        res.status(200).send({
            success: true,
            data: allUsers
        })
    }
}