module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    format: ['progress', 'json:reports/cucumber-report.json'],
    publishQuiet: true,
  },
};
