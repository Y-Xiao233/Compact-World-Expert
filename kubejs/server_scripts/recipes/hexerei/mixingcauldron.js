ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/hexerei/mixingcauldron/'
    /**
    {
     inputItem:[
     
     ], //max inputItem:8
     liquid:,
     liquid_consum:,
     output_liquid:,
     output:,
     output_amount:,
     heat:true,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            inputItem:[
            items('naturesaura:gold_fiber'),
            items('naturesaura:gold_fiber'),
            items('naturesaura:gold_fiber'),
            items('naturesaura:gold_fiber'),
            items('naturesaura:gold_fiber'),
            items('naturesaura:gold_fiber'),
            items('naturesaura:gold_fiber'),
            items('naturesaura:gold_fiber')
            ], //max inputItem:8
            liquid:'minecraft:water',
            liquid_consum:250,
            output_liquid:false,
            output:'naturesaura:gold_leaf',
            output_amount:16,
            heat:true,
            id:`${id_prefix}gold_leaf`
        },
        {
            inputItem:[
            items('compactmachines:wall'),
            items('compactmachines:wall'),
            items('minecraft:gold_nugget'),
            items('minecraft:gold_nugget'),
            items('minecraft:gold_nugget'),
            items('minecraft:gold_nugget'),
            items('minecraft:gold_nugget'),
            items('minecraft:gold_nugget')
            ], //max inputItem:8
            liquid:'minecraft:water',
            liquid_consum:250,
            output_liquid:false,
            output:'kubejs:gold_rich_compact_wall',
            output_amount:2,
            heat:true,
            id:`${id_prefix}gold_rich_compact_wall`
           },
           {
            inputItem:[
            items('compactmachines:wall'),
            items('compactmachines:wall'),
            items('compactmachines:wall'),
            items('compactmachines:wall'),
            items('hexerei:moon_dust'),
            items('hexerei:moon_dust'),
            items('hexerei:moon_dust'),
            items('hexerei:moon_dust')
            ], //max inputItem:8
            liquid:'minecraft:water',
            liquid_consum:100,
            output_liquid:false,
            output:'minecraft:andesite',
            output_amount:4,
            heat:true,
            id:`${id_prefix}andesite`
           },
           {
            inputItem:[
            items('minecraft:gold_nugget'),
            items('minecraft:gold_nugget'),
            items('minecraft:gold_nugget'),
            items('minecraft:gold_nugget'),
            items('minecraft:gold_nugget'),
            items('minecraft:gold_nugget'),
            items('minecraft:grass_block'),
            items('hexerei:moon_dust')
            ], //max inputItem:8
            liquid:'minecraft:water',
            liquid_consum:250,
            output_liquid:false,
            output:'botania:floating_endoflame',
            output_amount:1,
            heat:true,
            id:`${id_prefix}floating_endoflame`
           },
           {
            inputItem:[
            items('kubejs:compact_ingot'),
            items('psi:psidust'),
            items('kubejs:compact_ingot'),
            items('psi:psidust'),
            items('kubejs:compact_ingot'),
            items('psi:psidust'),
            items('kubejs:compact_ingot'),
            items('psi:psidust')
            ], //max inputItem:8
            liquid:'minecraft:water',
            liquid_consum:250,
            output_liquid:false,
            output:'psi:psimetal',
            output_amount:2,
            heat:true,
            id:`${id_prefix}psi_metal`
           },
           {
            inputItem:[
            items('kubejs:compact_dust'),
            items('kubejs:compact_dust'),
            items('kubejs:compact_dust'),
            items('kubejs:compact_dust'),
            items('kubejs:compact_dust'),
            items('kubejs:compact_dust'),
            items('kubejs:compact_dust'),
            items('kubejs:compact_dust')
            ], //max inputItem:8
            liquid:'minecraft:water',
            liquid_consum:100,
            output_liquid:false,
            output:'kubejs:compact_ingot',
            output_amount:4,
            heat:true,
            id:`${id_prefix}compact_ingot`
           }]

    recipes.forEach(recipe =>{
        recipe.output_liquid = (recipe.output_liquid == false) ? recipe.liquid : recipe.output_liquid
        if(recipe.heat == false){
            event.custom({
                "type": "hexerei:mixingcauldron",
                "liquid": {"fluid": recipe.liquid},
                "ingredients":recipe.inputItem,
                "output": {"item": recipe.output,"count":recipe.output_amount},
                "liquidOutput": {"fluid": recipe.output_liquid},
                "fluidLevelsConsumed":recipe.liquid_consum
               }).id(recipe.id)
        }else{
            event.custom({
                "type": "hexerei:mixingcauldron",
                "liquid": {"fluid": recipe.liquid},
                "ingredients":recipe.inputItem,
                "output": {"item": recipe.output,"count":recipe.output_amount},
                "liquidOutput": {"fluid": recipe.output_liquid},
                "fluidLevelsConsumed":recipe.liquid_consum,
                "heatRequirement": "heated"
               }).id(recipe.id)
        }
    })
})