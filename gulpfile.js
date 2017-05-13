var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsfiles = ['*.js', 'src.**/*.js'];


gulp.task('style', function() {
	return gulp.src(jsfiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', {
			verbose: true
		}))
		.pipe(jscs());
});

gulp.task('inject', function() {
	var wiredep = require('wiredep').stream;

	return gulp.src('./src/views/*.html')
		.pipe(wiredep(options))
		.pipe(gulp.dest('./src/views'));
})