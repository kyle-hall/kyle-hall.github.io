
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const util = require('gulp-util');
const child = require('child_process');

const cssFiles = [
  'node_modules/normalize.css/normalize.css',
  '_sass/**/*.scss'
];

const siteRoot = '_site';

gulp.task('css', () => {
  return gulp.src(cssFiles)
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(cssFiles, ['css']);
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach(msg => util.log('Jekyll: ' + msg))
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('default', ['css', 'jekyll', 'serve']);
