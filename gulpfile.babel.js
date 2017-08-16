import gulp from 'gulp'
import { exec } from 'child_process'
import browserSync from 'browser-sync'

const startSync = () => {
  browserSync.init({
    server: {
      baseDir: './',
      index: './samples/index.html'
    }
  })
}

const build = () => {
  console.info('Building files...')
  exec('yarn build', () => {
    browserSync.reload() })
}

const watch = () => {
  gulp.watch([
    './samples/*.html',
    './src/**/*.js'
  ], build)
}

gulp.task('start', startSync)
gulp.task('watch', watch)
gulp.task('default', ['start', 'watch'])
