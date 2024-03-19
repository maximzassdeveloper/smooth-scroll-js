import { RollupOptions } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default function (): RollupOptions | RollupOptions[] {
  return [
    {
      input: 'src/index.ts',
      output: [
        {
          file: 'dist/index.min.js',
          name: 'SmoothScrollJs',
          format: 'umd',
          sourcemap: true,
          exports: 'named',
        },
        {
          file: 'dist/index.cjs.js',
          format: 'cjs',
          sourcemap: true,
          exports: 'named',
        },
        {
          file: 'dist/index.esm.mjs',
          format: 'esm',
          sourcemap: true,
          exports: 'named',
        },
      ],
      plugins: [
        nodeResolve({ extensions: ['.ts', '.js'] }),
        esbuild({ minify: true }),
        commonjs(),
        typescript({
          declaration: true,
          declarationDir: 'dist',
          exclude: 'rollup.config.ts',
        }),
      ],
    },
  ]
}
