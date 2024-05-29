ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/other_recipes/liquid_burning/"

    const recipes = [
        {
            input:fluids("minecraft:lava"),
            burnTime: 20000,
            id:'lava'
        },
        {
            input:fluids('industrialforegoing:biofuel'),
            burnTime:24000,
            superheated:true,
            id:'biofuel'
        }]

    recipes.forEach(recipe => {
        if(recipe.superheated == undefined){
            event.custom({
                "type":"createaddition:liquid_burning",
                "input":recipe.input,
                "burnTime":recipe.burnTime
            }).id(`${id_prefix}${recipe.id}`)
        }else{
            event.custom({
                "type":"createaddition:liquid_burning",
                "input":recipe.input,
                "burnTime":recipe.burnTime,
                "superheated":true
            }).id(`${id_prefix}${recipe.id}`)
        }
    })
})