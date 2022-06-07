// commonjs const gulp = require('gulp');
// ES6 imports
import gulp from 'gulp';

global.gulp = gulp;

import {styles} from './gulp/tasks/styles.js';
import { scripts } from "./gulp/tasks/js.js";
import { html } from "./gulp/tasks/html.js";
import { clean } from "./gulp/tasks/clean.js";
import { images } from './gulp/tasks/images.js';
import { deploy } from './gulp/tasks/ghpages.js';


const watcher = (cb) => {
  gulp.watch('src/sass/**/*.{sass,scss}', styles);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch("src/*.html", html);
  gulp.watch("src/img/**/*.{jpg,png,webp,svg,ico}", images);
  cb();
};

const dev = gulp.series(
    clean,
    gulp.parallel(styles, scripts, html, images),
    watcher
);


gulp.task('deploy', deploy)
gulp.task('default', dev);
