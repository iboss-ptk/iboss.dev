module.exports = {
  "globals": {
    __PATH_PREFIX__: true,
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "extends": ["eslint:recommended"],
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": ["react"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": [2]
  }
};
