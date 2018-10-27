import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.tsx",
  output: {
    name: "plugin",
    file: "dist/index.js",
    format: "iife",
    globals: {
      react: "React",
      "react-dom": "ReactDOM"
    }
  },
  external: ["react", "react-dom"],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    // terser({
    //   compress: {
    //     ecma: 6
    //   },
    //   mangle: true
    // }),
    resolve({ browser: true }),
    commonjs({ include: "node_modules/**" }),
    typescript()
  ]
};
