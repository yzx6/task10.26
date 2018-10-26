var path = require("path");
module.exports = function(filepath) {
    return path.join(process.cwd(), filepath);
}