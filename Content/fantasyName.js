
let firstName;
let lastName;
let place;

module.exports = {

    async getName(req, res){

        acquiring()

        const generatedName = {
            name: firstName,
            lastname: lastName,
            place: place
        }

        res.send(generatedName)
    }
    
}

function acquiring(){

    let i = Math.floor(Math.random() * namelist.Firstname.length);
    firstName =  namelist.Firstname[i].name;
    place = namelist.Firstname[i].place;

    if(namelist.Firstname[i].place == 'Germany')
    {
        i = Math.floor(Math.random() * namelist.LastnameGer.length)
        lastName = namelist.LastnameGer[i].lastname
    }
    else if(namelist.Firstname[i].place == 'England')
    {
        i = Math.floor(Math.random() * namelist.LastnameEng.length)
        lastName = namelist.LastnameEng[i].lastname
    }

}


const namelist = {
    Firstname:[
    {
        name: 'Engel',
        place: 'Germany'
    },
    {
        name: 'Albert',
        place: 'Germany'
    },
    {
        name:'Erwin',
        place: 'Germany'
    },
    {
        name:'Herman',
        place: 'Germany'
    },
    {
        name:'Arnold',
        place: 'Germany'
    },
    {
        name:'Adolfus',
        place: 'Germany'
    },
    {
        name:'Hans',
        place: 'Germany'
    },
    {
        name:'Hamilton',
        place: 'England'
    },
    {
        name:'Holden',
        place: 'England'
    },
    {
        name:'Edison',
        place: 'England'
    },
    {
        name:'Richard',
        place: 'England'
    },
    {
        name:'Henry',
        place: 'England'
    },
    
    ],
    LastnameGer:
    [
        {
            lastname: 'Froste'
        },
        {
            lastname: 'Jäger'
        },
        {
            lastname: 'Weiss'
        },
        {
            lastname: 'Taube'
        },
        {
            lastname: 'Pflüger'
        },
        {
            lastname: 'Koch'
        },

    ],    
    LastnameEng:[       
    {
        lastname: 'Buckley'
    },
    {
        lastname: 'Blackbournee'
    },
    {
        lastname: 'Freemane'
    },
    {
        lastname: 'Baxtere'
    },
    {
        lastname: 'Swift'
    },
    {
        lastname: 'Turner'
    },
    {
        lastname: 'Chapman'
    },]
}