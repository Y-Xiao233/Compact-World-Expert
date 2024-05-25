ServerEvents.recipes(event => {
    const id_prefix = "compact_world:recipes/minecraft/crafting_table/backpack_upgrade/"

    /**
    {
     output:,
     pattern:['','',''],
     key:{

     },
     id:`${id_prefix}`
    }
  */

    const recipes = [
        {
            output:items('sophisticatedbackpacks:gold_backpack'),
            pattern:['BBB','BAB','BBB'],
            itemRegistryName:"sophisticatedbackpacks:gold_backpack",
            key:{"A":items("sophisticatedbackpacks:backpack"),"B":items("elementalcraft:contained_crystal")},
            id:'gold_backpack'
        },
        {
            output:items('sophisticatedbackpacks:diamond_backpack'),
            pattern:['AAA','ABA','AAA'],
            itemRegistryName:"sophisticatedbackpacks:diamond_backpack",
            key:{"A":items('create_new_age:overcharged_diamond'),"B":items('sophisticatedbackpacks:gold_backpack')},
            id:'diamond_backpack'
        }]

    recipes.forEach(recipe => {
        event.custom({
            "type":"sophisticatedbackpacks:backpack_upgrade",
            "conditions":[{"type":"sophisticatedcore:item_enabled","itemRegistryName":recipe.itemRegistryName}],
            "key":recipe.key,
            "pattern":recipe.pattern,
            "result":recipe.output
        }).id(`${id_prefix}${recipe.id}`)
    })
})