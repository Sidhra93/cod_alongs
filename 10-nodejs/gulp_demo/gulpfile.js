var gulp = require('gulp')
var uglify = require('gulp-uglify')

gulp.task('test', function(){
  console.log('hello');
})

gulp.task('minify', function(){
  gulp.src('app.js')
    .pipe(uglify())
    .pipe(gulp.dest('out'))
})
