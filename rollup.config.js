import { version } from "./package.json";
import babel from "rollup-plugin-babel";

const banner =
  "//  Spanish Car Plate v" +
  version +
  "\n" +
  "//  https://github.com/singuerinc/spanish-car-plate\n" +
  "//  (c) 2017-" +
  new Date().getFullYear() +
  " Nahuel Scotti\n" +
  "//  Spanish Car Plate may be freely distributed under the MIT license.\n";

export default {
  input: "src/index.js",
  output: {
    sourcemap: true,
    banner,
    format: "umd",
    file: "dist/index.js",
    name: "SpanishCarPlate"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ],
  watch: {
    include: "src/**",
    exclude: "node_modules/**"
  }
};
