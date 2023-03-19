let allUsers = require('../controllers/random.user')


module.exports.userUpdate = (req, res, next) => {
    console.log(req.body)
    let {Id, name, address, contact, photoUrl,  } = req.body;
     console.log(typeof(Id))
     if(typeof(Id) === 'number'){
        let newData =  allUsers.find(userId => userId.Id === Id)
          if(newData){
            const data = {
                Id: Id, 
                name: name,
                contact: contact,
                address: address,
                photoUrl: photoUrl
            }
            newData.Id = data.Id,
            newData.name = data.name,
            newData.contact = data.contact,
            newData.address= data.address,
            newData.photoUrl= data.photoUrl
            res.status(200).send({
                success: true,
                message: allUsers
            })
          }else{
            res.status(404).send({
                success: false,
                message: 'your Id is valid. please valid id return'
            })
          }
      }else{
        res.status(404).send({
            message: 'please validate id'
        })
      }
    
}