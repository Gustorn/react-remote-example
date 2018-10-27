const concurrently = require("concurrently");

concurrently([
  "npm --prefix host start",
  "npm --prefix foo start",
  "npm --prefix bar start",
  "npm --prefix dashboard start"
]).then(console.log, console.error);
