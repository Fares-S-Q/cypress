const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'https://www.amazon.com',     //Task 1
    //baseUrl: 'https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html'
  },
});


