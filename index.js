const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
//Set up the mongoose database
const db = require("./config/mongoose");
app.use("/", require("./routes"));
app.listen(port, (err) => {
  if (err) {
    console.log("Error listening on port", port);
    return;
  }
  console.log("Listening on port", port);
  return;
});
