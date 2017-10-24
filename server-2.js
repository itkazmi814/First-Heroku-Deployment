// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
//these two lines are all we need to do to use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}];

// Routes
// ===========================================================

//Basic route that sends the user first to the AJAX page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

//keep in mind that this has the potential to interfere with other GET file paths
app.get("/api/search/:charId?", function(req, res) {
  var chosen = req.params.charId;

  // What does this log?
  console.log("req.params: ")
  console.log(req.params);


  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {  
        return res.json(characters[i]);
      }
    }

    return res.send("No character found");
  }
  
  return res.json(characters);

  // if charId represents position
  // var toReturn = characters[parseInt(chosen)-1]
  // res.json(toReturn)
  // res.end();

  //set
}); //end .get(charId)

//block of code used to define a post
app.post("/api/new", function(req, res) {
  console.log(req.body);
  var newcharacter = req.body;

  console.log(newcharacter);

  characters.push(newcharacter);

  console.log(characters) 

  //res.json is used to end the response
  res.json(newcharacter);

});

//declares a get command
//declares the path for the get command
//declares the function that will be run
app.get("/api/characters", function(req,res) {
  //displays characters array to the console
  console.log(characters);
  //displays characters array to the web page
  //ends the connection
  console.table(characters)
  res.json(characters)

})


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});