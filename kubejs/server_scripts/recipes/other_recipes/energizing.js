ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/other_recipes/energizing/'

    const recipes = [
        {
            input:[
                items('industrialforegoing:machine_frame_pity'),
                items('naturesaura:token_euphoria'),
                items('minecraft:redstone_block'),
                items('create_new_age:blank_circuit')
            ],
            output:items('industrialforegoing:latex_processing_unit'),
            energy:12000,
            id:`${id_prefix}latex_processing_unit`
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "powah:energizing",
            "ingredients":recipe.input,
            "energy":recipe.energy,
            "result":recipe.output
        }).id(recipe.id)
    })
})