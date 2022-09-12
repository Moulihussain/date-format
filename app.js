const express = require("express");
const app = express();

//app.get("/", (request, response) => {
//  let date = new Date();
// let day = date.getDate();
//let month = date.getMonth();
// let year = date.getFullYear();
// if (day < 10) {
//  day = "0" + day;
// }
// if (month < 10) {
//   month = "0" + month;
// }
// let date1 = `${day}-${month}-${year}`;

// response.send(date1);
//});
app.get("/", (request, response) => {
  const dateTime = new Date();

  response.send(
    `${dateTime.getDate()}-${dateTime.getMonth()}-${dateTime.getFullYear()}`
  );
});

module.exports = app;
app.listen(3000);
