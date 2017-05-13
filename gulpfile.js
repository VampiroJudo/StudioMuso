var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsfiles = ['*.js', 'src.**/*.js'];


gulp.task('style', function() {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', {
			verbose: true
		}))
		.pipe(jscs());
});

gulp.task('inject', function() {
	var wiredep = require('wiredep').stream;
	var options = {
		bowerJson: require('./bower.json'),
		directory: '/'
	}

	return gulp.src('./src/views/*.html')
		.pipe(wiredep(options))
		.pipe(gulp.dest('./src/views'));
})