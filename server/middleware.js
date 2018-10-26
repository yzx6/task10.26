var url = require("url");
var aliApi = require("./api")

function queryParse(req, res, next) {
    req.pathname = url.parse(req.url).pathname
    req.query = url.parse(req.url, true).query
    next();
}

function bodyParse(req, res, next) {
    if (req.method != "POST") {
        next();
        return false
    }
    var sendDate = ""
    req.on("data", function(chunk) {
        sendDate += chunk
    })
    req.on("end", function() {
        try {
            sendDate = JSON.parse(sendDate)
        } catch (error) {
            try {
                sendDate = require("querystring").parse(sendDate)
            } catch (error) {
                throw new Error("error")
            }
        }
        req.body = sendDate;
        next();
    })
}

function resolveParse(req, res, next) {
    aliApi[req.pathname] ? aliApi[req.pathname](req, res, next) : next();
}
module.exports = [queryParse, bodyParse, resolveParse]