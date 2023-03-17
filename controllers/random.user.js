
module.exports=randomUsers = [
    {
        Id: 1,
        gender: "Female",
        name: "Rafi",
        contact: "+8801612147103",
        address: "Feni",
        photoUrl: "https://i.ibb.co/dsTpNwx/DSC-0947.jpg"
    },
    {
        Id: 2,
        gender: "Female",
        name: "Rahi",
        contact: "+8801612147103",
        address: "Feni",
        photoUrl: "https://i.ibb.co/dsTpNwx/DSC-0947.jpg"
    },
    {
        Id: 3,
        gender: "male",
        name: "Raju",
        contact: "+8801612147103",
        address: "Feni",
        photoUrl: "https://i.ibb.co/dsTpNwx/DSC-0947.jpg"
    },
    {
        Id: 4,
        gender: "male",
        name: "Raj",
        contact: "+8801612147103",
        address: "Feni",
        photoUrl: "https://i.ibb.co/dsTpNwx/DSC-0947.jpg"
    },
    {
        Id: 5,
        gender: "male",
        name: "Mahin",
        contact: "+8801612147103",
        address: "Feni",
        photoUrl: "https://i.ibb.co/dsTpNwx/DSC-0947.jpg"
    },
    {
        Id: 6,
        gender: "male",
        name: "Moheet",
        contact: "+8801612147103",
        address: "Feni",
        photoUrl: "https://i.ibb.co/dsTpNwx/DSC-0947.jpg"
    },
    {
        Id: 7,
        gender: "Female",
        name: "Rifa",
        contact: "+8801612147103",
        address: "Feni",
        photoUrl: "https://i.ibb.co/dsTpNwx/DSC-0947.jpg"
    },
    {
        Id: 8,
        gender: "Female",
        name: "Adiba",
        contact: "+8801612147103",
        address: "Feni",
        photoUrl: "https://i.ibb.co/dsTpNwx/DSC-0947.jpg"
    },
    {
        Id: 9,
        gender: "Female",
        name: "Ramisha",
        contact: "+8801612147103",
        address: "Feni",
        photoUrl: "https://i.ibb.co/dsTpNwx/DSC-0947.jpg"
    },
    {
        Id: 10,
        gender: "Female",
        name: "Nabila",
        contact: "+8801612147103",
        address: "Feni",
        photoUrl: "https://i.ibb.co/dsTpNwx/DSC-0947.jpg"
    },
]


module.exports.randomSingleUser = (req, res, next) => {
    let randomCounter = Math.floor((Math.random() * 10))
    if (randomCounter === 0) {
        randomCounter++
    }
    // console.log(randomCounter)
    const randomUser = randomUsers.find(user => user.Id == randomCounter)
    // console.log(randomUser)
    if (randomUser) {
        res.status(200).send({
            success: true,
            data: randomUser
        })
    } else {
        res.status(404).send({
            success: false,
            message: "not found"
        })
    }
}