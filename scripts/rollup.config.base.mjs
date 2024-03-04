import pgk from '../package.json' assert { type: 'json'}
import typescript from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'

const { name, version, author } = pgk

const banner = '/*!\n' + ` * ${name} v${version}\n` + ` * (c) 2024-${new Date().getFullYear()} ${author}\n` + ' * Released under the MIT License.\n' + ' */'

const pkgName = 'ZUtils'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: pkgName,
      banner
    },
    {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: pkgName,
      banner,
      plugins: [terser()]
    },
    {
      file: `dist/index.cjs.js`,
      format: 'cjs',
      name: pkgName,
      banner,
      plugins: [terser()]
    },
    {
      file: `dist/index.esm.js`,
      format: 'es',
      name: pkgName,
      banner,
      plugins: [terser()]
    },
    {
      file: `dist/index.js`,
      format: 'iife',
      name: pkgName,
      banner,
      plugins: [terser()]
    }
  ],
  plugins: [
    json(),
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ]
}
