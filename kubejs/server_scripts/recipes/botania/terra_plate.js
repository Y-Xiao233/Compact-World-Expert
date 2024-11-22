ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/botania/terra_plate/"

    /**
    {
     input:[],
     output:,
     mana:,
     id:
    }
    */

    const recipes = [
        {
            input:[items('spirit:soul_glass'),items('spirit:compressed_soul_powder_block'),items('spirit:soul_steel_block'),items('minecraft:lapis_block')],
            output:items('vitalize:soul_revitalizer'),
            mana:200000,
            id:'soul_revitalizer'
        },
        {
            input:[items('spirit:soul_glass'),items('spirit:compressed_soul_powder_block'),items('spirit:soul_steel_block'),items('malum:arcane_spirit')],
            output:items('vitalize:pylon_base'),
            mana:200000,
            id:'pylon_base'
        },
        {
            input:[items('minecraft:lapis_block'),items('spirit:compressed_soul_powder_block'),items('mekanismgenerators:reactor_glass')],
            output:items('spirit:soul_crystal'),
            mana:50000,
            id:'empty_soul_crystal'
        },
        {
            input:[items('industrialforegoing:machine_frame_simple'),items('minecraft:diamond_pickaxe')],
            output:items('industrialforegoing:laser_drill'),
            mana:50000,
            id:'laser_drill'
        }]

    recipes.forEach((recipe) => {
        event.custom({
            "type":"botania:terra_plate",
            "ingredients":recipe.input,
            "mana":recipe.mana,
            "result":recipe.output
        }).id(`${id_prefix}${recipe.id}`)
    })
})