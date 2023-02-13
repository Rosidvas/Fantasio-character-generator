
let rolledFocus
let rolledPath
let rolledWeapon
let p //random Path
let f //random Focus
let w //random Weapon
module.exports = {

    async getSkill(req, res){

        p = Math.floor(Math.random() * skills.Path.length);
        rolledPath = skills.Path[p].path

        if(rolledPath == 'Warrior'){
            f = Math.floor(Math.random() * skills.Path[p].focus.length);
            rolledFocus = skills.Path[p].focus[f].type;

            //Warrior Weapons

            //Special case for Archers
            if (rolledFocus == 'archery'){
                w = Math.floor(Math.random() * skills.Path[p].weaponry[1].weapon.length);
                rolledWeapon = skills.Path[p].weaponry[1].weapon[w].type;
            }
            else if(rolledFocus == 'Hand to hand'){
                rolledWeapon = 'fists';
            }
            else {
                w = Math.floor(Math.random() * skills.Path[p].weaponry[0].weapon.length);
                rolledWeapon = skills.Path[p].weaponry[0].weapon[w].type
            }

        }

        else if(rolledPath == 'Mage'){
            f = Math.floor(Math.random() * skills.Path[p].focus.length);
            rolledFocus = skills.Path[p].focus[f].type;

            rolledWeapon = 'Magic';
        }

        else if(rolledPath == 'Thief'){
            
            f = Math.floor(Math.random() * skills.Path[p].focus.length);
            rolledFocus = skills.Path[p].focus[f].type;

            // Warrior weapons will be used by the thief
            w = Math.floor(Math.random() * skills.Path[0].weaponry[0].weapon.length);
            rolledWeapon = skills.Path[0].weaponry[0].weapon[w].type
        }
            

        res.json({
            Path: rolledPath,
            Focus: rolledFocus,
            Weapon: rolledWeapon // Special for Warriors
        })
        
    }
    
}

const skills = {

    Path:[ 
        {
            path: 'Warrior',
            focus: [
                {
                    type: 'Dual wielding'
                },
                {
                    type: 'One Hand'
                },
                {
                    type: 'Hand to hand'
                },
                {
                    type: 'archery'
                },
            ],
            weaponry: [
                {
                    fightstyle: 'Closecombat',
                    weapon: [
                        {
                            type: 'Sword'
                        },
                        {
                            type: 'Longsword'
                        },
                        {
                            type: 'Battle axe'
                        },
                        {
                            type: 'Warhammer'
                        },
                        {
                            type: 'Dagger'
                        },
                        {
                            type: 'scythe'
                        },
                        {
                            type: 'Spear'
                        },
                        {
                            type: 'Mace'
                        },
                        {
                            type: 'Lance'
                        },
                    ]
                },
                {
                    type: 'Distancecombat',
                    weapon: [
                        {
                            type: 'Bow'
                        },
                        {
                            type: 'Longbow'
                        },
                        {
                            type: 'Crossbow'
                        },
                    ]
                },
            ]
        },
        {
            path: 'Mage',
            focus: [
                {
                    type: 'Illusion',
                },
                {
                    type: 'Destruction',
                },
                {
                    type: 'Alteration',
                },
                {
                    type: 'Conjuration',
                },
                {
                    type: 'Restoration',
                },
            ]
        },
        {
            path: 'Thief',
            focus: [
                {
                    type: 'Stealth',
                },
                {
                    type: 'Speech',
                },
                {
                    type: 'Alchemy',
                },
                {
                    type: 'Pickpocket',
                },
                {
                    type: 'Manipulation',
                },
                {
                    type: '',
                },
                
            ]
        }

    ]
}