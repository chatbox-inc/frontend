"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const php = require("gulp-connect-php");
const browserSync = require("browser-sync");

const {src,dest} = global;

gulp.task("server",()=> {

    var config = {
        proxy: "127.0.0.1:8000",
        open: "external",
        //notify: false
    };

    var server = {
        base: `${dest}`,
    }

    php.server(server,() => {
        browserSync(config)
    });

    return gulp.watch(`${dest}/**/*`, () => {
        setTimeout(function(){
            browserSync.reload();
        },500);
    });
});
