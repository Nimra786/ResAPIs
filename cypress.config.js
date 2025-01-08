const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'https://reqres.in',
    setupNodeEvents(on, config) {
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Specify the report directory
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
