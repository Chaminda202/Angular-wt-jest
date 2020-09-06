module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
      '<rootDir>/setup-jest.ts'
  ],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: '<rootDir>/target/coverage/',
  transformIgnorePatterns: [
      'node_modules/(?!@ngrx|ngx-socket-io)' // List any packages here that error
  ],
  transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/dist/',
      '<rootDir>/cypress/',
      '<rootDir>/src/test.ts',
  ]
};
