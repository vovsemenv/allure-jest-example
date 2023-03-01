import { Allure, JasmineAllureReporter } from "allure-jasmine";

const reporter = new JasmineAllureReporter({ resultsDir: "allure-results" });
(jasmine as any).getEnv().addReporter(reporter);
global.allure = reporter.getInterface();
