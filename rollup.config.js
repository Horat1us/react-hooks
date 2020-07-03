import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import pkg from './package.json';

const extensions = [".ts", ".tsx",];
const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    "@babel/runtime/helpers/slicedToArray",
    "@babel/runtime/helpers/extends"
];

export default [{
    input: 'src/index.ts',
    external,
    plugins: [
        resolve({
            dedupe: ['react',],
            extensions,
        }),
        babel({
            exclude: ['node_modules/**'],
            extensions,
            babelHelpers: 'runtime',
        }),
    ],
    output: [
        {file: pkg.main, format: 'cjs'},
        {file: pkg.module, format: 'es'}
    ],
}];

