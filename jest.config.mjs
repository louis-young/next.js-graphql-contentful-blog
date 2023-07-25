import nextJest from "next/jest.js";

/** @type {import("jest").Config} */
const jestConfiguration = {
  collectCoverageFrom: ["src/**/*.{js,mjs,jsx,ts,tsx,}", "!**/pages/**"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
};

const createJestConfiguration = nextJest({
  dir: "./",
});

export default createJestConfiguration(jestConfiguration);
