
let originRegion;
let originHold
let originCity;
let i;
let a
module.exports = {

    async getPlace(req, res){

            i = Math.floor(Math.random() * places.Region.length);
            originHold = places.Region[i].Hold;
            originRegion = places.Region[i];

            a = Math.floor(Math.random() * places.Region[i].Town.length);
            originCity = places.Region[i].Town[a].place;
            

            res.json({

                Hold: originHold,
                City: originCity
            })
    }
    
}

const places = {
    Region:[
    {
        Hold: 'Argovie',
        Town: [
            {
                place: 'Neu Aarau',
            },
            {
                place: 'Alt Aarau',
            },
            {
                place: 'Grotzka',
            },
        ]
    },
    {
        Hold: 'Aar',
        Town: [
            {
                place: 'Aundau',
            },
            {
                place: 'Zollan',
            },

        ]
    },
    {
        Hold: 'The Kingdom',
        Town: [
            {
                place: 'The Capital',
            },
            {
                place: 'Stanstover',
            },
            {
                place: 'Donvau',
            },
            {
                place: 'Port Fair'
            },
            {
                place: 'Ildera'
            },
        ]
    },
    {
        Hold: 'East Valia',
        Town: [
            {
                place: 'Port Valen',
            },
            {
                place: 'St Valia',
            },
            {
                place: 'Veldra',
            },
            {
                place: 'Port Valna',
            },
        ]
    },
    {
        Hold: 'West Valia',
        Town: [
            {
                place: 'Port Alva',
            },
            {
                place: 'West Valia',
            },
           
        ]
    },
    {
        Hold: 'Principality of Garen',
        Town: [
            {
                place: 'Port Norham',
            },
            {
                place: 'Elben Delta',
            },
            {
                place: 'Ivarstead',
            },
        ]
    },
    {
        Hold: 'Dunningtian Theocracy',
        Town: [
            {
                place: 'Barden',
            },
            {
                place: 'Callford',
            },
            {
                place: 'Narzul Bur',
            },
            {
                place: 'Bance',
            },
            {
                place: 'Fego',
            },
        ]
    },
    {
        Hold: 'Captantarian Empire',
        Town: [
            {
                place: 'Osulimormen',
            },
        ]
    },
    {
        Hold: 'Grand Duchy of Leonevechia',
        Town: [
            {
                place: 'Canton',
            },
            
        ]
    },
    {
        Hold: 'Principality of Fiushia',
        Town: [
            {
                place: 'Lepota',
            },
            {
                place: 'Lila',
            },
            
        ]
    },
    {
        Hold: 'Ponzia',
        Town: [
            {
                place: 'Ponzio',
            },
        ]
    },
    ],
}


