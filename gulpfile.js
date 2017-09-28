"use strict";

var gulp = require("gulp");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csscomb = require("gulp-csscomb");

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("css"))
    .pipe(csso())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("csscomb", function(){
  gulp.src("less/blocks/*.less")
  .pipe(plumber())
  .pipe(csscomb())
  .pipe(gulp.dest("less/blocks/"))
})

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
