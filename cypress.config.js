const { defineConfig } = require('cypress')

module.exports = defineConfig({
  requestTimeout: 10000,
  defaultCommandTimeout: 15000,
  pageLoadTimeOut: 15000,
  ScreenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  env: {
    login_url: 'http://automationpractice.com/index.php',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{feature,features}',
  },
})
