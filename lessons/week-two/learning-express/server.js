const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('sup yo');
});

app.get('/goodbye/:name', (req, res) => {
  // res.status(200).send('goodbye');
  res.send(`Goodbye ${req.params.name}`);
});

app.get('/double/:number', (req, res) => {
  // res.status(200).send('goodbye');
  res.send(`Hello ${req.params.number * 2}`);
});

app.get('/reverse/:name', (req, res) => {
  // res.status(200).send('goodbye');
  	function reverseString (str) {
    	return str.split('').reverse().join('');
  }

  res.send(`Hello ${reverseString(req.params.name)}`);
});

app.listen(8080, () => {
  console.log('Listening on 8080');
});
