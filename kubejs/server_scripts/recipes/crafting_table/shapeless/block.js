ServerEvents.recipes(event => {
    const id_prefix = 'compact_world:recipes/crafting_table/shapeless/block/'
    /**
    {
     output:,
     output_amount:,
     input:[],
     id:`${id_prefix}`
    }
   */
    const recipes = [
        {
            output:'elementalcraft:elementpipe',
            output_amount:4,
            input:['elementalcraft:elementpipe_impaired','elementalcraft:elementpipe_impaired','elementalcraft:elementpipe_impaired','elementalcraft:elementpipe_impaired','kubejs:gem_earth','kubejs:gem_earth'],
            id:`${id_prefix}elementpipe_2`
        },
        {
            output:'kubejs:swift_alloy_sand',
            output_amount:1,
            input:['#forge:sand','elementalcraft:swift_alloy_nugget'],
            id:`${id_prefix}swift_alloy_sand`
        },
        {
            output:'create:cogwheel',
            output_amount:4,
            input:['create:shaft','create:andesite_casing'],
            id:`${id_prefix}cogwheel`
        },
        {
            output:'ae2:crafting_terminal',
            output_amount:1,
            input:['ae2:semi_dark_monitor','minecraft:crafting_table','ae2:fluix_glass_cable'],
            id:`${id_prefix}crafting_terminal`
        }]

    recipes.forEach(recipe =>{
        event.shapeless(Item.of(recipe.output,recipe.output_amount),recipe.input).id(recipe.id)
    })
})