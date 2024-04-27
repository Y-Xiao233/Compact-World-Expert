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
            input:items('create:limestone'),
            output:items('naturesaura:infused_stone'),
            catalyst:false,
            aura:0,
            time:10,
            id:`${id_prefix}infused_stone`
        },
        {
            input:items('kubejs:soul_steel_casing'),
            catalyst:'kubejs:token_euphoria_catalyst',
            output:items('mekanism:enrichment_chamber'),
            aura:0,
            time:100,
            id:`${id_prefix}enrichment_chamber`
        },
        {
            input:items('create:andesite_casing'),
            catalyst:'kubejs:token_euphoria_catalyst',
            output:items('create_new_age:energiser_t1'),
            aura:0,
            time:100,
            id:`${id_prefix}energiser_t1`
        },
        {
            input:items('minecraft:gold_ingot'),
            catalyst:'ae2:not_so_mysterious_cube',
            output:items('ae2:printed_logic_processor'),
            aura:100,
            time:10,
            id:`${id_prefix}printed_logic_processor`
        },
        {
            input:items('elementalcraft:drenched_iron_ingot'),
            catalyst:'ae2:not_so_mysterious_cube',
            output:items('ae2:printed_engineering_processor'),
            aura:100,
            time:10,
            id:`${id_prefix}printed_engineering_processor`
        },
        {
            input:items('ae2:silicon'),
            catalyst:'ae2:not_so_mysterious_cube',
            output:items('ae2:printed_silicon'),
            aura:100,
            time:10,
            id:`${id_prefix}printed_silicon`
        },
        {
            input:items('kubejs:mana_certus_quartz_crystal'),
            catalyst:'ae2:not_so_mysterious_cube',
            output:items('ae2:printed_calculation_processor'),
            aura:100,
            time:10,
            id:`${id_prefix}printed_calculation_processor`
        },
        {
            input:items('naturesaura:depth_ingot'),
            catalyst:'naturesaura:conversion_catalyst',
            output:items('minecraft:diamond',3),
            aura:500,
            time:50,
            id:`${id_prefix}diamond`
        },
        {
            input:items('naturesaura:depth_ingot_block'),
            catalyst:'naturesaura:conversion_catalyst',
            output:items('minecraft:diamond_block',3),
            aura:4000,
            time:400,
            id:`${id_prefix}diamond_block`
        },
        {
            input:items('kubejs:incomplete_craftpurecrystal',1,'{SequencedAssembly:{Progress:0.6f,Step:3,id:"compact_world:recipes/create/special_sequenced_assembly/special/purecrystal"}}'),
            catalyst:'kubejs:token_euphoria_catalyst',
            output:items('kubejs:incomplete_craftpurecrystal',1,'{SequencedAssembly:{Progress:0.8f,Step:4,id:"compact_world:recipes/create/special_sequenced_assembly/special/purecrystal"}}'),
            aura:0,
            time:10,
            id:`${id_prefix}purecrystal/step3-4`
        }]

    recipes.forEach(recipe =>{
        if(recipe.catalyst == false){
            event.custom({
                "type":"naturesaura:altar",
                "input":recipe.input,
                "output":recipe.output,
                "aura":recipe.aura,
                "time":recipe.time
            }).id(recipe.id)
        }else{
            event.custom({
                "type":"naturesaura:altar",
                "input":recipe.input,
                "output":recipe.output,
                "catalyst":{"item":recipe.catalyst},
                "aura":recipe.aura,
                "time":recipe.time
            }).id(recipe.id)
        }
    })
})

/*
ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/natures_auar/altar/sequenced_assembly/'

    const sequenced_assembly_recipes = [
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

    sequenced_assembly_recipes.forEach(sequenced_assembly_recipe =>{
        if(sequenced_assembly_recipe.output_nbt != false){
            event.custom({
                "type":"naturesaura:altar",
                "input":{"type":'forge:nbt','item':sequenced_assembly_recipe.input,'nbt':sequenced_assembly_recipe.input_nbt},
                "output":{"type":'forge:nbt','item':sequenced_assembly_recipe.output,'nbt':sequenced_assembly_recipe.output_nbt},
                "aura":sequenced_assembly_recipe.aura,
                "catalyst":{"item":sequenced_assembly_recipe.catalyst},
                "time":sequenced_assembly_recipe.time
            }).id(sequenced_assembly_recipe.id)
        }else{
            event.custom({
                "type":"naturesaura:altar",
                "input":{"type":'forge:nbt','item':sequenced_assembly_recipe.input,'nbt':sequenced_assembly_recipe.input_nbt},
                "output":{"item":sequenced_assembly_recipe.output},
                "aura":sequenced_assembly_recipe.aura,
                "catalyst":{"item":sequenced_assembly_recipe.catalyst},
                "time":sequenced_assembly_recipe.time
            }).id(sequenced_assembly_recipe.id)
        }
    })
})

*/