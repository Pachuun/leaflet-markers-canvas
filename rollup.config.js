import babel from 'rollup-plugin-babel';
import nodePoly from 'rollup-plugin-polyfill-node';
import { uglify } from 'rollup-plugin-uglify';

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: "src/leaflet-markers-canvas.js",
    output: [
        {
            file: "dist/leaflet-markers-canvas.js",
            format: "umd",
        },
        {
            file: "dist/leaflet-markers-canvas.min.js",
            format: "umd",
            plugins: [uglify()],
        },
    ],
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        corejs: 3,
                        modules: false,
                        useBuiltIns: 'usage',
                    },
                ],
            ],
        }),
        commonjs(),
        nodeResolve(),
        nodePoly({ include: null })
    ],
    external: ["rbush", "leaflet"],
};
