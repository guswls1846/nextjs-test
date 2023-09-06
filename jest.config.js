const nextJest = require("next/jest");

const babelConfigStyledComponents = {
  presets: [["next/babel", { "preset-react": { runtime: "automatic" } }]],
  plugins: [
    "babel-plugin-macros",
    ["babel-plugin-styled-components", { ssr: true }],
  ],
};

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/app/(.*)$": "<rootDir>/src/app/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs)$": ["babel-jest", babelConfigStyledComponents],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
