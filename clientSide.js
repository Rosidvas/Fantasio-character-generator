// Character name and gender
let personName;
let lastname;
let gender;
// Place of birth
let place;
let City;
//Skills
let path;
let skill;
let weapon;

const generateBtn = document.getElementById('generateBtn')
const originTxt = document.getElementById('origintxt')

generateBtn.addEventListener('click', getOrigin)

function getOrigin(){
     
    fetch('http://localhost:3000/acquireName')
    .then(res => res.json())
    .then(data => { 
        console.log(data)
        personName = data.name;
        lastname = data.lastname;
        gender = data.gender
        setOrigin();
    })
    .catch(error => console.log('could not execute request'))
    
    fetch('http://localhost:3000/acquirePlace')
    .then(res => res.json())
    .then(data => { 
        console.log(data)
        place = data.Hold;
        City = data.City;
    })
    .catch(error => console.log('could not execute request'))
    
    fetch('http://localhost:3000/acquireSkill')
    .then(res => res.json())
    .then(data => { 
        console.log(data)
        skill = data.Focus;
        weapon = data.Weapon;
        path = data.Path
    })
    .catch(error => console.log('could not execute request'))
    setOrigin()
}

function setOrigin(){
    originTxt.innerHTML =`
    <b>Firstname</b><br>
    ${personName}<br>
    <b>Lastname</b><br>
    ${lastname}<br>
    <b>Gender</b><br>
    ${gender}<br>
    <b>City</b><br>
    ${City}<br>
    <b>Region/Empire/Kingdom</b><br>
    ${place}<br>
    <b>Path</b><br>
    ${path}<br>
    <b>Skill</b><br>
    ${skill}<br>
    <b>Weapon of choice</b><br>
    ${weapon}`
}

/*
`<tr><td>Firstname:</td><td> ${personName}</td></tr>
<tr><td>Lastname:</td><td> ${lastname}</td></tr>
<tr><td>Gender:</td><td> ${gender}</td></tr>
<tr><td>City:</td><td> ${City}</td></tr>
<tr><td>Region/Empire/Kingdom:</td><td> ${place}</td></tr>
<tr><td>Path:</td><td> ${path}</td></tr>
<tr><td>Skill:</td><td> ${skill}</td></tr>
<tr><td>Weapon of choice:</td><td>${weapon}</td></tr>`*/