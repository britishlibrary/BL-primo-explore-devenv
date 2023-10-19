'use strict';

let gulp = require('gulp');
let babel = require('gulp-babel');
let config = require('../config.js');
let rename = require("gulp-rename");
let concat = require("gulp-concat");
let debug = require('gulp-debug');
var wrap = require("gulp-wrap");
var glob = require('glob');
let browserSyncManager = require('../browserSyncManager');

let buildParams = config.buildParams;



gulp.task('watch-css', gulp.series('select-view', (cb) => {
    var filesWatchGlob = [buildParams.customCssMainPath(), buildParams.customNpmCssPath()];
    var excludesFilesGlob = ['!'+buildParams.customCssPath()]
    gulp.watch(filesWatchGlob.concat(excludesFilesGlob), {interval: 3000, usePolling: true}, gulp.series('custom-css'));
    cb();
})); //  




gulp.task('custom-css', gulp.series('select-view', () => {
    if (browserSyncManager.getBSyncHandle() === null) {
        return gulp.src([buildParams.customCssMainPath(),buildParams.customNpmCssPath(),'!'+buildParams.customCssPath()])
            .pipe(concat(buildParams.customCssFile))
            .pipe(gulp.dest(buildParams.viewCssDir()));
    } else {
        return gulp.src([buildParams.customCssMainPath(),buildParams.customNpmCssPath(),'!'+buildParams.customCssPath()])
            .pipe(concat(buildParams.customCssFile))
            .pipe(gulp.dest(buildParams.viewCssDir()))
            .pipe(browserSyncManager.getBSyncHandle().stream());
    }

}));
