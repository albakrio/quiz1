const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
// const methodOverride = require("method-override");
const app = express();

//Import our routes:
const rootRoute = require('./routes/index');
const postsRoute = require('./routes/posts');

//Setup our view engine to ejs
app.set("view engine", "ejs");

//use middleware:
app.use(logger());
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, "/public")));

// app.use(methodOverride((req, res) => {
//   if (req.body && req.body._method) {
//     const method = req.body._method
//     delete req.body._method
//     return method
//   };
// }));

app.use((req, res, next) => {
  res.locals.username = req.cookies.username || ""
  next()
});

//Create Routers to access our server
app.use("/posts", postsRoute);
app.use("/", rootRoute);






const PORT = 4000
const DOMAIN = 'localhost'

app.listen(PORT, DOMAIN, () => {
  console.log(`live server is running at ${PORT}....`);

})