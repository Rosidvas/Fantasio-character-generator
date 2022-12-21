
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log('Commencing the Magic!');
});

const nameList = require('./Content/fantasyName.js')
const placeList = require('./Content/fantasyPlace.js')



app.get('/acquirePlace', placeList.getPlace)
app.get('/acquireName', nameList.getName)
app.get('/acquire',)