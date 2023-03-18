let allUsers = require('../controllers/random.user')


module.exports.userUpdate = (req, res, next) => {
    const {Id, name, address, contact, photoUrl,  } = req.body;
    const data = {
        Id: Id, 
        name: name,
        contact: contact,
        address: address,
        photoUrl: photoUrl
    }
    let matchId = allUsers.find(userId => userId.Id === Id)
    console.log("MatchId", matchId)
    const newData = {...matchId, }
    console.log(newData)
    res.send(newData)
}