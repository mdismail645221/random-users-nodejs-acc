let count = 0;
const viewCount = (req, res, next)=> {
    count++;
    // console.log(count)
    // res.send("count hited")
    next()
}

module.exports = viewCount;