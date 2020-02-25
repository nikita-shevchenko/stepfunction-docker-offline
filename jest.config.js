module.exports = {
  "roots": [
    "./tests"
  ],
  "transform": {
    "^.+\\.ts?$": "ts-jest"
  },
  collectCoverage: true,
  // coverageThreshold: {
  //   global: {
  //     branches: 70,
  //     functions: 70,
  //     lines: 70,
  //     statements: -20
  //   }
  // },
  reporters: ['default', 'jest-junit']
};
