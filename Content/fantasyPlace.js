
let originRegion;
let originCity;
let i;
module.exports = {

    async getPlace(req, res){

        
        if(req.body.place  == 'Germany')
        {
            i = Math.floor(Math.random() * places.Germany.length)
            originRegion = places.Germany[i].Region
            originCity = places.Germany[i].City

            res.json({
                Region: originRegion,
                City: originCity
            });
        }
        else if(req.body.place  == 'England')
        {

            i = Math.floor(Math.random() * places.England.length)
            originRegion = places.England[i].Region
            originCity = places.England[i].City
            
            res.json({
                Region: originRegion,
                City: originCity
            });
        }
        else{
            res.json({
                Region: unknown,
                City: unknown
            });
        }

        const userOrigin = {
            
            place: ''
        }
        
        res.send(userOrigin)

    }
    
}

const places = {
    Germany:[
    {
        Region: 'Duchy of Hesse',
        City: 'Frankfurt'
    },
    {
        Region: 'Electorate of Hannover',
        City: 'Hannover'
    },
    {
        Region: 'Prussia',
        City: 'Berlin'
    },
    {
        Region: 'Prussia',
        City: 'Stettin'
    },
    {
        Region: 'Prussia',
        City: 'Potsdam'
    },
    {
        Region: 'Saxony',
        City: 'Leipzig'
    },
    {
        Region: 'County of Basel',
        City: 'Basel'
    },
    ],
    England:[
        {
            Region: 'Northumbria',
            City: 'Newcastle'          
        },
        {
            Region: 'Danelaw',
            City: 'Doncaster'          
        },
        {
            Region: 'Wessex',
            City: 'London'          
        },
        {
            Region: 'Mercia',
            City: 'Buckingham'          
        },
        {
            Region: 'Norfolk',
            City: 'Norwich'          
        },
    ]}


