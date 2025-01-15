const logger = (req,res,next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date();
    console.log(method, url, time.getFullYear()+"-"+time.getMonth()+"-"+time.getDay(), time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
    next();
}

module.exports = logger;