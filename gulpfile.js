/* Compiler Pug avec gulp*/

const gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('pug', () =>
gulp.src('./Pug/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./'))
)

gulp.task('default', ()=> {
    gulp.watch('./Pug/*.pug', ['pug']); /*utiliza 2 param.*/
});


