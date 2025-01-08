const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'https://reqres.in',
    setupNodeEvents(on, config) {
    },
  },
});
