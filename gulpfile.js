var gulp = require("gulp");
var gulpwebserver = require("gulp-webserver");
var config = require("./server/config");
var middleware = require("./server/middleware")
gulp.task("server", function() {
    return gulp.src(config.path)
        .pipe(gulpwebserver({
            port: config.port,
            middleware: middleware
        }))
})