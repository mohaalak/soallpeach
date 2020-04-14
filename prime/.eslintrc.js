module.exports = {
  env: {
    commonjs: true,
    node: true,
    jest: true,
  },
  extends: ['standard'],
  plugins: ['jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {},
};
