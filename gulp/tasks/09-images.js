'use strict';

const gulp = require('gulp');
const flatten = require('gulp-flatten');
const config = require('../config.js');
const imagemin = require('gulp-imagemin');

let buildParams = config.buildParams;

gulp.task('watch-img', () => {
    var filesWatchGlob = [buildParams.viewImgDir()];
    var excludesFilesGlob = ['!'+ buildParams.customNpmImgPath()];
    gulp.watch(filesWatchGlob.concat(excludesFilesGlob), {interval: 1000, usePolling: true}, gulp.series('custom-img'));
});

gulp.task('custom-img', () => {
    return gulp.src(buildParams.customNpmImgPath())
        .pipe(flatten())
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest(buildParams.viewImgDir()));
});
