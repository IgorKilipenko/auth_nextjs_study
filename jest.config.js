const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@Components/(.*)$': '<rootDir>/components/$1',
    '^@Components$': '<rootDir>/components',
    '^@Styles/(.*)$': '<rootDir>/styles/$1',
    '^@Styles$': '<rootDir>/styles',
    '^@Store$': '<rootDir>/components/store',
    '^@Store/(.*)$': '<rootDir>/components/store/$1',
    '^@Hooks$': '<rootDir>/hooks',
    '^@Utils$': '<rootDir>/utils',
    '^@Pages/(.*)$': '<rootDir>/pages/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)