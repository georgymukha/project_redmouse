export const jquery = () => {
  return gulp.src('src/js/jquery.min.js')
        .pipe(gulp.dest('build/js'))
}