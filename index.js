const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));


app.get('/about', (req,res) => {
  res.sendFile(path.resolve(__dirname,'about.html'));
});

app.get('/contact', (req,res) => {
  res.sendFile(path.resolve(__dirname,'contact.html'));
});

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname,'index.html'));

});

app.listen(3000, () => {

  console.log('Magic Happens on Port 3000');
});