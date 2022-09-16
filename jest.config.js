module.exports = {
    testRunner: "jest-jasmine2",
    setupFilesAfterEnv: ["./spec/helpers/babel.js","./spec/helpers/allure.ts"]
};
