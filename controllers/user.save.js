let allUsers = require('../controllers/random.user')


module.exports.userSaveInfo = (req, res, next) => {
    // console.log(req.body)
    const newUser = req.body;
    
    if (allUsers === null) {
        res.status(404).send({
            success: false,
            message: "Please Validate data provide"
        })

    } else {
        const Id = allUsers.length + 1;
        const newAllUsers = { ...newUser, Id }
        allUsers.push(newAllUsers)
        res.status(200).send({
            success: true,
            data: allUsers
        })
    }
}