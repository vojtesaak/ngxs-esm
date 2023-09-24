const ngPreset = require('jest-preset-angular/presets');


/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
const config = {
  ...ngPreset.defaultsESM,
  setupFilesAfterEnv: ['<rootDir>/setup-jest-esm.ts'],
  transform: {
    '^.+\\.(ts|js|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig-esm.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        useESM: true
      },
    ],
  },
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
    '^rxjs(/operators)?$': '<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!tslib)',
  ],
};

module.exports = config
