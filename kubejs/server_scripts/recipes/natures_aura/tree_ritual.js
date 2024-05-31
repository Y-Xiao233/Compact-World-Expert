ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/natures_auar/tree_ritual/'
    /**
    {
     inputItem:[
     {}
     ], //max inputItem:8
     sapling:,
     ountput:,
     output_amount:,
     time:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            inputItem:[
            {"item":'compactmachines:wall'},
            {"item":'compactmachines:wall'},
            {"item":'compactmachines:wall'},
            {"item":'psi:psimetal'},
            {"item":'psi:psimetal'},
            {"item":'psi:psimetal'},
            {"item":'kubejs:highly_rough_psimetal_shovel'},
            {"item":'kubejs:water_droplet'}
            ], //max inputItem:8
            sapling:'minecraft:oak_sapling',
            ountput:'farmersdelight:cooking_pot',
            output_amount:1,
            time:10,
            id:`${id_prefix}cooking_pot`
        },
        {
            inputItem:[
            {"item":'minecraft:bone_meal'},
            {"item":'minecraft:bone_meal'},
            {"item":'minecraft:bone_meal'},
            {"item":'minecraft:bone_meal'},
            {"item":'hexerei:moon_dust'},
            {"item":'hexerei:moon_dust'},
            {"item":'naturesaura:gold_leaf'},
            {"item":'naturesaura:gold_leaf'}
            ], //max inputItem:8
            sapling:'minecraft:oak_sapling',
            ountput:'botania:fertilizer',
            output_amount:16,
            time:10,
            id:`${id_prefix}fertilizer`
        },
        {
            inputItem:[
            {"item":'naturesaura:gold_brick'},
            {"item":'ars_nouveau:archwood_planks'},
            {"item":'create:limestone'},
            {"item":'naturesaura:gold_leaf'},
            {"item":'kubejs:mana_powder'},
            {"type":"forge:nbt","item":'naturesaura:aura_bottle',"nbt":{"stored_type": "naturesaura:overworld"}},
            {"item":'minecraft:book'},
            {"item":'kubejs:gem_earth'}
            ], //max inputItem:8
            sapling:'minecraft:oak_sapling',
            ountput:'naturesaura:nature_altar',
            output_amount:2,
            time:10,
            id:`${id_prefix}nature_altar`
        },
        {
            inputItem:[
            items('botania:purple_petal'),
            items('naturesaura:gold_leaf'),
            items('minecraft:gold_ingot'),
            items('minecraft:gold_ingot')
            ], //max inputItem:8
            sapling:'minecraft:oak_sapling',
            ountput:'naturesaura:eye',
            output_amount:1,
            time:10,
            id:`${id_prefix}natureaura_eye`
           }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"naturesaura:tree_ritual",
            "ingredients":recipe.inputItem,
            "sapling":{"item":recipe.sapling},
            "output":{"item":recipe.ountput,"count":recipe.output_amount},
            "time":recipe.time
        }).id(recipe.id)
    })
})