const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
async function setupNodeEvents(on, config) {
  
on('file:preprocessor', cucumber())
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //path of test cases
    specPattern:"cypress/UAT/featrue/*.feature"
    //specPattern:"cypress/Intergration/Evaluation/*.js"

    
  },
});
