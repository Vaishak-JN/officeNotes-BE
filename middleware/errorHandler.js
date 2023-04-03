const { logEvents } = require('./logger')


//for the errrors that we didn't catch
const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 // server error 

    res.status(status)

    //for rtk query
    res.json({ message: err.message, isError: true })
}

module.exports = { errorHandler }