var express = require ('express');
var mongoose = require ('mongoose');
var morgan = require ('morgan');
var path = require ("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(logger("dev"));

// TODO: WORK ON MONGO STUFF FOR SERVER

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );


// TODO: WORK ON ROUTES


app.listen(PORT, () => {
console.log(`SEVER IS RUNNING ON ${PORT}`);
});

// I need to work on MONGO so I'll have to figure this out later

//TEST COMMIT