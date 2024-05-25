ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/apotheosis/salvaging/"
    /**
    {
     input:items(),
     output:items(),
     requirements:{
        "eterna":,
        "quanta":,
        "arcana":
     },
     max_requirements:{
        "eterna":,
        "quanta":,
        "arcana":
     },
     display_level:,
     id:
    }
    */
    const recipes = [
        {
            input:items('psi:ivory_psimetal'),
            output:items('naturesaura:tainted_gold'),
            requirements:{
                "eterna":22.5,
                "quanta":63,
                "arcana":0
            },
            max_requirements:{
                "eterna":22.5,
                "quanta":100,
                "arcana":10
            },
            display_levels:3,
            id:'tainted_gold'
        }]

    recipes.forEach(recipe => {
        event.custom({
            "type":"apotheosis:enchanting",
            "conditions":[{"type":"apotheosis:module","module":"enchantment"}],
	        "input":recipe.input,
	        "requirements":recipe.requirements,
	        "max_requirements":recipe.max_requirements,
	        "display_level":recipe.display_levels,
	        "result":recipe.output
        }).id(`${id_prefix}${recipe.id}`)
    })
})