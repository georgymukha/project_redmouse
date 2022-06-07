import ghPages from "gulp-gh-pages";

export const deploy = () => {
    return gulp.src('./build/**/*')
        .pipe(ghPages());
}