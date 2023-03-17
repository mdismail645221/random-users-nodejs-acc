let allUsers = require('../controllers/random.user')


module.exports.userSaveInfo = (req, res, next) => {
    console.log(allUsers)
    const newUser = req.body;
    console.log(typeof(newUser))
    if (allUsers === null) {
        res.status(404).send({
            success: false,
            message: "Please Validate data provide"
        })

    } else {
        const Id = allUsers.length + 1;
        const newAllUsers = { ...newUser, Id }
        const query = allUsers.filter(user => user.Id == newUser.Id);
        console.log("query", query)
        allUsers.push(newAllUsers)
        res.status(200).send({
            success: true,
            data: allUsers
        })
    }



    // console.log("allUsers", allUsers)



}