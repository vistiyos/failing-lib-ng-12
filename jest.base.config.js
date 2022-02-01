module.exports = {
  "preset": "jest-preset-angular",
  "moduleNameMapper": {
    "lodash-es": "lodash", // use plain js lodash for tests since jest cannot handle ES modules yet
  },
  "modulePathIgnorePatterns": [
    "<rootDir>/dist/"
  ]
};
