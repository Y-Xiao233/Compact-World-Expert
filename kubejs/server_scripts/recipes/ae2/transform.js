ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/ae2/transform/"


    const recipes = [
        {
            type:'explosion',
            input:[
                items('ae2:singularity'),
                items('minecraft:diamond')
            ],
            output:items('ae2:quantum_entangled_singularity',2),
            id:'quantum_entangled_singularity'
        }]

    recipes.forEach(recipe => {
        event.custom({
            "type": "ae2:transform",
            "circumstance":{"type":recipe.type},
            "ingredients":recipe.input,
            "result":recipe.output
        }).id(`${id_prefix}${recipe.id}`)
    })
})