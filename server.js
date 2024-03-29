var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


// Sets an initial port. We"ll use this later in our listener

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sets the routes 

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

//listener port
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});