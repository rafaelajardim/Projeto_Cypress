const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true,
    reporter: 'mochawesome',
    reporterOptions: 'cypress/results'
    overwrite: false,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
  },
});
