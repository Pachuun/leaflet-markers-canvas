import { uglify } from 'rollup-plugin-uglify';

import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';

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
    plugins: [buble(),
    commonjs({ transformMixedEsModules: true })],
    external: ["rbush", "leaflet", "react-svg-to-image"],
};
