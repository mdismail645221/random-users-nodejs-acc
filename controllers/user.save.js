let allUsers = require('../controllers/random.user')


module.exports.userSaveInfo = (req, res, next) => {
    // console.log(req.body)
    const newData = req.body;
    console.log("newdata", newData)

    for(const user in newData){
        for(const oldUser in allUsers[0]){
            console.log(oldUser)
        }
    }
   
    res.send("newUser")
    // if (allUsers === null) {
    //     res.status(404).send({
    //         success: false,
    //         message: "Please Validate data provide"
    //     })

    // } else {
    //     const Id = allUsers.length + 1;
    //     const newAllUsers = { ...newUser, Id }
    //     const query = allUsers.filter(user => user.Id == newUser.Id);
    //     // console.log("query", query)
    //     allUsers.push(newAllUsers)
    //     res.status(200).send({
    //         success: true,
    //         data: allUsers
    //     })
    // }



    // console.log("allUsers", allUsers)



}