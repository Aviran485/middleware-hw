const users = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    console.log('hello1')
    next();
}
module.exports = users