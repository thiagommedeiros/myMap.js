import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/index.js',
  moduleName: 'myMaps',
  format: 'umd',
  dest: 'lib/myMaps.min.js',
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
}
