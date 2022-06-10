import babel from 'gulp-babel';
import webpack from 'webpack-stream';

export const scripts = () => {
  return gulp
    .src(["src/js/*.js", "!src/js/jquery.min.js"])
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(
      webpack({
        mode: "development",
      })
    )
    .pipe(gulp.dest("build/js"))
};
