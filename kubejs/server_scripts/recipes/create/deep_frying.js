function deep_frying(input,output,processingTime){
    this.type = "create_bic_bit:deep_frying"
    this.ingredients = input
    this.results = output
    this.processingTime = processingTime != undefined ? processingTime : 100
}

deep_frying.prototype = {
    heatRequirement : function(heatRequirement){
        this.heatRequirement = heatRequirement
        return this
    },

}


ServerEvents.recipes(event => {
    const id_prefix = "compact_world:recipes/create/deep_frying/"

    function deep_frying_recipe(recipes,id){
        event.custom(recipes).id(`${id_prefix}${id}`)
    }

    deep_frying_recipe(new deep_frying([items('kubejs:incomplete_crystal_blazing'),fluids('kubejs:purewater',250)],[items('powah:crystal_blazing')]).heatRequirement('heated'),'crystal_blazing')
})