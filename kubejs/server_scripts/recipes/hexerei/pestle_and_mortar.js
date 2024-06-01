ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/hexerei/pestle_and_mortar/'
    /**
    {
     inputItem:[
     {"item":},
     {"item":},
     {"item":},
     {"item":},
     {"item":}
     ], //inputItem:5
     output:,
     output_amount:,
     time:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            inputItem:[
            {"item":'botania:livingwood_log'},
            {"item":'botania:livingwood_log'},
            {"item":'minecraft:gold_nugget'},
            {"item":'minecraft:gold_nugget'},
            {"item":'minecraft:gold_nugget'}
            ], //inputItem:5
            output:'sophisticatedstorage:upgrade_base',
            output_amount:4,
            time:160,
            id:`${id_prefix}sophisticatedstorage_upgrade_base`
        },
        {
            inputItem:[
            {"item":'minecraft:gold_ingot'},
            {"item":'psi:psimetal'},
            {"item":'naturesaura:gold_leaf'},
            {"item":'kubejs:source_clay_ball'},
            {"item":'kubejs:source_clay_ball'}
            ], //inputItem:5
            output:'kubejs:functionalstorage_upgrade_base',
            output_amount:3,
            time:240,
            id:`${id_prefix}functionalstorage_upgrade_base`
           },
           {
            inputItem:[
            {"item":'psi:psimetal'},
            {"item":'botania:livingwood_log'},
            {"item":'minecraft:oak_log'},
            {"item":'botania:livingwood_log'},
            {"item":'psi:psimetal'}
            ], //inputItem:5
            output:'minecraft:smithing_table',
            output_amount:1,
            time:300,
            id:`${id_prefix}smithing_table`
           },
           {
            inputItem:[
            {"item":'minecraft:cobblestone'},
            {"item":'minecraft:cobblestone'},
            {"item":'minecraft:cobblestone'},
            {"item":'minecraft:cobblestone'},
            {"item":'minecraft:cobblestone'}
            ], //inputItem:5
            output:'minecraft:sand',
            output_amount:5,
            time:40,
            id:`${id_prefix}sand`
           },
           {
            inputItem:[
            {"item":'quark:bonded_leather'},
            {"item":'quark:bonded_leather'},
            {"item":'minecraft:string'},
            {"item":'minecraft:string'},
            {"item":'minecraft:string'}
            ], //inputItem:5
            output:'sophisticatedbackpacks:upgrade_base',
            output_amount:2,
            time:160,
            id:`${id_prefix}sophisticatedbackpacks_upgrade_base`
           },
           {
            inputItem:[
            {"item":'minecraft:raw_gold'},
            {"item":'minecraft:raw_gold'},
            {"item":'minecraft:raw_gold'},
            {"item":'minecraft:raw_gold'},
            {"item":'minecraft:raw_gold'}
            ], //inputItem:5
            output:'create:crushed_raw_gold',
            output_amount:8,
            time:80,
            id:`${id_prefix}crushed_raw_gold`
           },
           {
            inputItem:[
            {"item":'hexerei:belladonna_flowers'},
            {"item":'hexerei:belladonna_berries'},
            {"item":'hexerei:belladonna_berries'},
            {"item":'hexerei:belladonna_berries'},
            {"item":'hexerei:sage'}
            ], //inputItem:5
            output:'hexerei:mindful_trance_blend',
            output_amount:5,
            time:80,
            id:`${id_prefix}mindful_trance_blend`
           },
           {
            inputItem:[
            {"item":'ars_nouveau:source_gem'},
            {"item":'ars_nouveau:source_gem'},
            {"item":'ars_nouveau:source_gem'},
            {"item":'ars_nouveau:source_gem'},
            {"item":'ars_nouveau:source_gem'}
            ], //inputItem:5
            output:'kubejs:source_dust',
            output_amount:5,
            time:80,
            id:`${id_prefix}source_dust`
           },
           {
            inputItem:[
            {"item":'naturesaura:gold_leaf'},
            {"item":'naturesaura:gold_leaf'},
            {"item":'naturesaura:gold_leaf'},
            {"item":'naturesaura:gold_leaf'},
            {"item":'naturesaura:gold_leaf'}
            ], //inputItem:5
            output:'minecraft:yellow_dye',
            output_amount:6,
            time:80,
            id:`${id_prefix}yellow_dye`
           },
           {
            inputItem:[
            {"item":'minecraft:sand'},
            {"item":'minecraft:sand'},
            {"item":'minecraft:sand'},
            {"item":'minecraft:sand'},
            {"item":'minecraft:sand'}
            ], //inputItem:5
            output:'minecraft:gravel',
            output_amount:5,
            time:40,
            id:`${id_prefix}gravel`
           },
           {
            inputItem:[
            {"item":'compressium:cobblestone_1'},
            {"item":'compressium:cobblestone_1'},
            {"item":'compressium:cobblestone_1'},
            {"item":'compressium:cobblestone_1'},
            {"item":'compressium:cobblestone_1'}
            ], //inputItem:5
            output:'minecraft:andesite',
            output_amount:8,
            time:80,
            id:`${id_prefix}andesite`
           },
           {
            inputItem:[
            {"item":'botania:black_lotus'},
            {"item":'botania:black_lotus'},
            {"item":'botania:black_lotus'},
            {"item":'botania:black_lotus'},
            {"item":'botania:black_lotus'}
            ], //inputItem:5
            output:'psi:ebony_substance',
            output_amount:2,
            time:80,
            id:`${id_prefix}ebony_substance_1`
           },
           {
            inputItem:[
            {"item":'botania:blacker_lotus'},
            {"item":'botania:blacker_lotus'},
            {"item":'botania:blacker_lotus'},
            {"item":'botania:blacker_lotus'},
            {"item":'botania:blacker_lotus'}
            ], //inputItem:5
            output:'psi:ebony_substance',
            output_amount:8,
            time:120,
            id:`${id_prefix}ebony_substance_2`
           },
           {
            inputItem:[
            {"item":'kubejs:compact_dust'},
            {"item":'kubejs:compact_dust'},
            {"item":'kubejs:compact_dust'},
            {"item":'kubejs:compact_dust'},
            {"item":'kubejs:compact_dust'}
            ], //inputItem:5
            output:'psi:psidust',
            output_amount:5,
            time:100,
            id:`${id_prefix}psidust`
           }]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "hexerei:pestle_and_mortar",
            "ingredients":recipe.inputItem,
            "output": {"item":recipe.output,"count":recipe.output_amount},
            "grindingTime":recipe.time
        }).id(recipe.id)
    })
})