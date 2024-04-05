ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/natures_auar/altar/'
    /**
    {
     input:,
     catalyst:,
     output:,
     aura:,
     time:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            input:'create:limestone',
            output:'naturesaura:infused_stone',
            catalyst:false,
            aura:0,
            time:10,
            id:`${id_prefix}infused_stone`
        },
        {
            input:'kubejs:soul_steel_casing',
            catalyst:'kubejs:token_euphoria_catalyst',
            output:'mekanism:enrichment_chamber',
            aura:0,
            time:100,
            id:`${id_prefix}enrichment_chamber`
        },
        {
            input:'create:andesite_casing',
            catalyst:'kubejs:token_euphoria_catalyst',
            output:'create_new_age:energiser_t1',
            aura:0,
            time:100,
            id:`${id_prefix}energiser_t1`
        },
        {
            input:'minecraft:gold_ingot',
            catalyst:'ae2:not_so_mysterious_cube',
            output:'ae2:printed_logic_processor',
            aura:100,
            time:10,
            id:`${id_prefix}printed_logic_processor`
        },
        {
            input:'elementalcraft:drenched_iron_ingot',
            catalyst:'ae2:not_so_mysterious_cube',
            output:'ae2:printed_engineering_processor',
            aura:100,
            time:10,
            id:`${id_prefix}printed_engineering_processor`
        },
        {
            input:'ae2:silicon',
            catalyst:'ae2:not_so_mysterious_cube',
            output:'ae2:printed_silicon',
            aura:100,
            time:10,
            id:`${id_prefix}printed_silicon`
        },
        {
            input:'kubejs:mana_certus_quartz_crystal',
            catalyst:'ae2:not_so_mysterious_cube',
            output:'ae2:printed_calculation_processor',
            aura:100,
            time:10,
            id:`${id_prefix}printed_calculation_processor`
        }]

    recipes.forEach(recipe =>{
        if(recipe.catalyst == false){
            event.custom({
                "type":"naturesaura:altar",
                "input":{"item":recipe.input},
                "output":{"item":recipe.output},
                "aura":recipe.aura,
                "time":recipe.time
            }).id(recipe.id)
        }else{
            event.custom({
                "type":"naturesaura:altar",
                "input":{"item":recipe.input},
                "output":{"item":recipe.output},
                "catalyst":{"item":recipe.catalyst},
                "aura":recipe.aura,
                "time":recipe.time
            }).id(recipe.id)
        }
    })
})

ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/natures_auar/altar/sequenced_assembly/'

    const recipes = [
        {
            input:'kubejs:incomplete_craftpurecrystal',
            input_nbt:'{SequencedAssembly:{Progress:0.6f,Step:3,id:"compact_world:recipes/create/special_sequenced_assembly/special/purecrystal"}}',
            output:'kubejs:incomplete_craftpurecrystal',
            output_nbt:'{SequencedAssembly:{Progress:0.8f,Step:4,id:"compact_world:recipes/create/special_sequenced_assembly/special/purecrystal"}}',
            catalyst:'kubejs:token_euphoria_catalyst',
            aura:0,
            time:10,
            id:`${id_prefix}purecrystal_step_4`
        }]

    recipes.forEach(recipe =>{
        if(recipe.output_nbt != false){
            event.custom({
                "type":"naturesaura:altar",
                "input":{"type":'forge:nbt','item':recipe.input,'nbt':recipe.input_nbt},
                "output":{"type":'forge:nbt','item':recipe.output,'nbt':recipe.output_nbt},
                "aura":recipe.aura,
                "catalyst":{"item":recipe.catalyst},
                "time":recipe.time
            }).id(recipe.id)
        }else{
            event.custom({
                "type":"naturesaura:altar",
                "input":{"type":'forge:nbt','item':recipe.input,'nbt':recipe.input_nbt},
                "output":{"item":recipe.output},
                "aura":recipe.aura,
                "catalyst":{"item":recipe.catalyst},
                "time":recipe.time
            }).id(recipe.id)
        }
    })
})