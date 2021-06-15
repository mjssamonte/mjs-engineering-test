const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs'); //Set EJS as view engine user by express
app.set('views', 'views'); //Set views directory as views

//Import Routes
const apiRoutes = require('./routes/api');
const numberRoutes = require('./routes/number');
const instructionRoutes = require('./routes/instruction');

// Add static assets directory - public
app.use(express.static(path.join(__dirname, 'public')));

// Parses application/json
app.use(express.json({
    verify : (req, res, buf, encoding) => {
      //Check JSON if valid
      try {
        JSON.parse(buf);
      } catch(e) {
        res.status(404).send({message: "Invalid JSON."});
        throw Error('invalid JSON');
      }
    }
  }))

// Parses application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) 

// Add routes to middleware chain
app.use('/', instructionRoutes);
app.use('/number', numberRoutes);
app.use('/api', apiRoutes);
app.use(function(req, res, next) {
  res.status(404).send("404 - The Requested URL was not found on this server.")
});

// Start server and listen to port 3030
app.listen(port, () => {
    console.log(`Server is running and listening at http://localhost:${port}`)
});