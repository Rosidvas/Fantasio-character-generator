
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());

app.listen(PORT, () => {
  console.log('Commencing the Magic!');
});

const nameList = require('./Content/fantasyName.js')
const placeList = require('./Content/fantasyPlace.js')
const skills = require('./Content/fantasySkills.js')


app.get('/acquirePlace', placeList.getPlace)
app.get('/acquireName', nameList.getName)
app.get('/acquireSkill', skills.getSkill)