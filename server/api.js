var aliApi = {}
var fs = require("fs");
var resolve = require("./ulis");

function readFile(filepath) {
    var data = fs.readFileSync(resolve(filepath), "utf-8");
    return data ? JSON.parse(data) : [];
}
aliApi["/api/list"] = function(req, res, next) {
    var val = req.query.val
    var data = readFile("./mock/data.json")
    var arr = []
    data.forEach(function(v) {
        if (v.name.match(val) != null) {
            arr.push(v)
        }
    })
    res.end(JSON.stringify({ code: 0, data: arr }))
    next();
}
module.exports = aliApi