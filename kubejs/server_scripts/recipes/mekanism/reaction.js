function reactionRecipe(input_item,amount,input_gas,input_fluid,time){
    this.type = "mekanism:reaction"
    this.duration = time
    this.fluidInput = input_fluid
    this.gasInput = input_gas
    this.itemInput = {"amount":amount,"ingredient":input_item}
}

reactionRecipe.prototype = {
    outputItem : function(output_item){
        this.itemOutput = output_item
        return this
    },
    outputGas : function(output_gas){
        this.gasOutput = output_gas
        return this
    }
}

ServerEvents.recipes(event => {
    const id_prefix = "compact_world:recipes/mekanism/reaction/"

    function reactionRecipeSchema(RecipeSchema,id){
        event.custom(RecipeSchema).id(`${id_prefix}${id}`)
    }

    reactionRecipeSchema(new reactionRecipe(items('thermal:apatite'),4,gases('kubejs:mana_gas',600),fluids('kubejs:purewater',1000),30).outputItem(items('botania:mana_diamond')),"mana_diamond")
    reactionRecipeSchema(new reactionRecipe(items('minecraft:diamond'),1,gases('mekanism:oxygen',2000),fluids('kubejs:purewater',1000),30).outputItem(items('thermal:apatite',8)),"apatite")
    reactionRecipeSchema(new reactionRecipe(items('kubejs:source_psicoal'),1,gases('mekanism:oxygen',500),fluids('kubejs:purewater',1000),30).outputItem(items('minecraft:coal',2)),"coal")
    reactionRecipeSchema(new reactionRecipe(items('psi:ivory_psimetal'),1,gases('kubejs:base_matter_gas',100),fluids('kubejs:purewater',1000),30).outputItem(items('kubejs:blank_alloy_infused',4)),'blank_alloy_infused')
})