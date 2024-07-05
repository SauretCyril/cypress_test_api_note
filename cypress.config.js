const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
    },
  },
  env: {
    baseurl: "https://practice.expandtesting.com/notes/api/users",
    currentuser: "none",
  },
});
