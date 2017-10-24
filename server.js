// Dependencies
// ===========================================================
var express = require("express");

//what is the express() fxn?
var app = express();
var PORT = 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

var obiwankenobi = {
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 35,
  forcePoints: 1600
}

//

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.post("/", (req,res) => {
  res.send("posting to root")
})

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});


// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

app.get("/obiwankenobi", (req,res) => {
  res.send(obiwankenobi);
})

//" : " is used to indicate characters is a variable
app.get("/:charFromURL", function(req, res) {
  var chosen = req.params.characters;

  // What does this log?
  console.log(chosen);

  res.end();
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
