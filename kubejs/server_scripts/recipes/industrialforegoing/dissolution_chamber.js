ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/industrialforegoing/dissolution_chamber/"

    /**
    {
     input_item:[

     ],
     input_fluid:,
     input_fluid_amount:,
     output_fluid:,
     output_fluid_amount:,
     output_item:,
     time:,
     id:`${id_prefix}`
    }
    */

    const recipes = [
        {
            input_item:[
                'botania:terrasteel_ingot','botania:life_essence',
                'botania:terrasteel_ingot','botania:life_essence',
                'botania:life_essence','botania:terrasteel_ingot',
                'botania:life_essence','botania:terrasteel_ingot'
            ],
            input_fluid:'kubejs:liquid_soul',
            input_fluid_amount:100,
            output_fluid:false,
            output_fluid_amount:0,
            output_item:'4x botania:gaia_ingot',
            time:100,
            id:`${id_prefix}gaia_ingot`
        }]

    recipes.forEach(recipe =>{
        if(recipe.output_fluid == false){
            event.recipes.industrialforegoing.dissolution_chamber(recipe.input_item,Fluid.of(recipe.input_fluid,recipe.input_fluid_amount),recipe.output_item,recipe.time).id(recipe.id)
        }else{
            event.recipes.industrialforegoing.dissolution_chamber(recipe.input_item,Fluid.of(recipe.input_fluid,recipe.input_fluid_amount),recipe.output_item,recipe.time,Fluid.of(recipe.output_fluid,recipe.output_fluid_amount)).id(recipe.id)
        }
    })
})