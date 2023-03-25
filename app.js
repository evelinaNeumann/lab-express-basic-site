const express = require('express');


const app = express();

app.use(express.static('public'));


// Home page route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
  });

  
// About page route
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// Works page route
app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/public/works.html');

  });
// Photo Gallery page route 
app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/public/gallery.html');
});
  // Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
