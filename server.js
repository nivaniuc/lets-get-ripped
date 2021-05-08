var express = require ('express');
var mongoose = require ('mongoose');
var logger = require ('morgan');
var path = require ("path");

var app = express();

var db = require("./models");

var PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/FITNESS-TRACKER',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });



app.listen(PORT, () => {
console.log(`SEVER IS RUNNING ON ${PORT}`);
});


//Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


