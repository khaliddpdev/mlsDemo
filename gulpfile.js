var gulp = require('gulp'),
    fs = require('fs'),
    concat = require('gulp-concat'),
    exec = require('child_process').exec,
    projectName = 'mlsDemo';

gulp.task('build-css-config', function () {
    fs.readFile('css/config.css', function (err, data) {
        if (err) throw err;
        var mobileBreakpointRegex = /%(.*)%/,
            configCSS = String(data),
            formattedCSS = configCSS.replace(/\\a|\s/g, ''),
            rawConfigJSON = mobileBreakpointRegex.exec(formattedCSS)[1],
            configJSON = JSON.parse(rawConfigJSON);

        fs.writeFile('src/modules/config.json', rawConfigJSON, function (err) {
            if (err) throw err;
        })
    });
});

gulp.task('monitor-css-config', function(){
    gulp.watch('css/config.css', ['build-config']);
});

gulp.task('build', function () {
    fs.readFile('css/config.css', function (err, data) {
        if (err) throw err;
        var mobileBreakpointRegex = /%(.*)%/,
            configCSS = String(data),
            formattedCSS = configCSS.replace(/\\a|\s/g, ''),
            rawConfigJSON = mobileBreakpointRegex.exec(formattedCSS)[1],
            configJSON = JSON.parse(rawConfigJSON);

        fs.writeFile('src/modules/config.json', rawConfigJSON, function (err) {
            if (err) throw err;
        })
    });
    exec('r.js -o src/build.js', function (err, stdout, stderr) {
        console.log('results: ', stdout);
        gulp.src(['src/vendors/require.min.js', 'build/' + projectName + '-src.js'])
            .pipe(concat(projectName + '.js', {newLine: ';'}))
            .pipe(gulp.dest('build'));
    })
});