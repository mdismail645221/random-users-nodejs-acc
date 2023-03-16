module.exports.getAllUsers = (req, res, next)=> {
    res.send('getAllUsers')
}

module.exports.getAllUsersById = (req, res, next)=> {
    console.log(req.params)
    res.send('getAllUsersById')
}