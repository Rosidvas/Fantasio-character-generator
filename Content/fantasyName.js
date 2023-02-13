
let firstName;
let lastName;
let gender;

module.exports = {

    async getName(req, res){

        acquiring()

        const generatedName = {

            name: firstName,
            lastname: lastName,
            gender: gender
        }

        res.send(generatedName)
    }
    
}

function acquiring(){

    let i = Math.floor(Math.random() * genderlist.Gender.length);
    gender = genderlist.Gender[i].gender

    if(gender == 'male'){
        i = Math.floor(Math.random() * namelist.FirstnameMales.length);
        firstName =  namelist.FirstnameMales[i].name;
    }
    else if (gender == 'female'){
        i = Math.floor(Math.random() * namelist.FirstnameFemales.length);
        firstName =  namelist.FirstnameFemales[i].name;
    }
    
    i = Math.floor(Math.random() * namelist.Lastname.length)
    lastName = namelist.Lastname[i].lastname

}

//The Datalist

const genderlist = {
    Gender: [
        {
            gender: 'male'
        },
        {
            gender: 'female'
        },
    ]
}

const namelist = {
    FirstnameMales:[
    {
        name: 'Scelles',
    },
    {
        name: 'Raxleon',
    },
    {
        name: 'Oritonde',
    },
    {
        name: 'Clagius',
    },
    {
        name: 'Attelian',
    },
    {
        name:'Albeci',
    },
    {
        name: 'Bellard',
    },
    {
        name: 'Limoron',
    },
    ],
    
    FirstnameFemales:[
        {
            name: 'Sabinu',
        },
        {
            name: 'Frina',
        },
        {
            name: 'Livia',
        },
        {
            name: 'Fjolrin',
        },
        {
            name: 'Haaki',
        },
        {
            name: 'Saeta',
        },
        {
            name: 'Leona',
        },
    ],
    
    Lastname:
    [
        {
            lastname: 'Flavonius'
        },
        {
            lastname: 'Amatius'
        },
        {
            lastname: 'Critiu'
        },
        {
            lastname: 'Abitius'
        },
        {
            lastname: 'Magia'
        },
        {
            lastname: 'Popillius'
        },
        {
            lastname: 'Albinac'
        },
        {
            lastname: 'Choiges'
        },
    ],    
}