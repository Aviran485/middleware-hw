const whatever = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    console.log('hello2')
    next();
}
module.exports = whatever