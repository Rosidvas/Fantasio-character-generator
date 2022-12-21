
let personName
let lastname
let place

function getFantasyperson(){

    fetch('http://localhost:3000/acquireName')
    then(res => res.json())
    .then(data => { 
        personName = res.body.name;
        lastname = res.body.lastName;
        place = res.body.place;
    })
    .catch(error => console.log('could not execute request'))
    

    fetch('http://localhost:3000/acquirePlace',  
    { 
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
        },
        place: place
    })
    then(res => res.json())
    .then(data => { 
        
    })
    .catch(error => console.log('could not execute request'))
}
