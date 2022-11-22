module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: [
      './packages/react_web/tsconfig.json',
      './packages/base/axios/tsconfig.json',
      './packages/base/util/tsconfig.json'
    ]
  },
  plugins: ['react'],
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  rules: {
    //    "prettier/prettier": "error", // prettier 맞지 않은것 error
    '@typescript-eslint/space-before-function-paren': 'off' // 불필요한것 같아서 제외
  }
}
