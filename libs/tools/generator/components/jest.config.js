const { pathsToModuleNameMapper } = require("ts-jest");

const { compilerOptions } = require("../../../shared/tsconfig.spec.json");

/** @type {import('jest').Config} */
module.exports = {
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  preset: "ts-jest",
  testEnvironment: "../../../shared/test.environment.ts",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions?.paths || {}, {
    prefix: "<rootDir>/../../",
  }),
};
