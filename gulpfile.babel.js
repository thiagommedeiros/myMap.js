import gulp from 'gulp'
import { exec } from 'child_process'
import { rollup } from 'rollup'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import uglify from 'rollup-plugin-uglify'
import browserSync from 'browser-sync'

gulp.task('start', () =>
  browserSync.init({
    server: {
      baseDir: './',
      index: './samples/index.html'
    }
  })
)

gulp.task('build', () =>
  rollup({
    entry: 'src/index.js',
    plugins: [
      commonjs(),
      babel({
        babelrc: false,
        presets: [
          [
            'es2015',
            {
              modules: false
            }
          ]
        ]
      }),
      uglify(),
      filesize()
    ]
  }).then(bundle =>
    bundle.write({
      format: 'umd',
      moduleName: 'myMap',
      dest: 'lib/myMap.min.js'
    })
  )
)

gulp.task('watch', () =>
  gulp.watch([
    './samples/*.html',
    './src/**/*.js'
  ], ['build']))

gulp.task('default', ['start', 'build', 'watch'])
