let allUsers = require('../controllers/random.user');

module.exports.userDelete = (req, res, next) => {
    const { Id } = req.query;
    console.log("Id", Id)

    if (Id) {
        allUsers = allUsers?.filter(user => user.Id !== parseInt(Id));
           if(allUsers.length === 0){
            res.status(401).send({
                success: false,
                message: 'array in not found data'
            })
           }else{
            res.status(200).send({
                success: true,
                data : allUsers
            })
           }
    }else{
        res.status(401).send({
            success: false,
            message : "not found"
        })
    }


}