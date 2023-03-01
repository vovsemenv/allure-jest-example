module.exports = {
  testRunner: "jest-jasmine2",
  setupFilesAfterEnv: [
    "./spec/helpers/babel.js",
    "./allure.ts",
    "jest-extended/all",
  ],
};
