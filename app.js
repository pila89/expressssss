const express = require("express");
const moment = require("moment");
const path = require("path");
const app = express();
const port = 7000;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});
if (
  moment().day() >= 1 &&
  moment().hours() >= 08 &&
  moment().day() <= 5 &&
  moment().hours() <= 17
) {
  app.use(express.static("public"));
} else {
  app.get("*", (req, res) => {
    res.status(400);
    res.send(
      "<h1>The web application is only work time (Monday to Friday,  from 9 to 17) contact us on the number +21655555555555 </h1>"
    );
  });
}
app.listen(port, (err) => {
  err
    ? console.log(error)
    : console.log(`Server fired at http://localhost:${port}`);
});
