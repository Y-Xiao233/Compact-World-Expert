/*
ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/vintageimprovements/pressurizing/"


    const recipes = [
        {
            secondaryFluidInputs:true,
            input:[
                items('ae2:matter_ball'),
                fluids('kubejs:purewater',250),
            ],
            output:[
                items('kubejs:pure_matter_ball')
            ],
            time:200,
            id:'pure_matter_ball'
        }]

    recipes.forEach(recipe =>{
        if(recipe.secondaryFluidInputs == true){
            event.custom({
                "type":"vintageimprovements:pressurizing",
                "secondaryFluidInputs":0,
                "ingredients":recipe.input,
                "results":recipe.output,
                "processingTime":recipe.time
            }).id(`${id_prefix}_${recipe.id}`)
        }else{
            event.custom({
                "type":"vintageimprovements:pressurizing",
                "ingredients":recipe.input,
                "results":recipe.output,
                "processingTime":recipe.time
            }).id(`${id_prefix}_${recipe.id}`)
        }
    })
})
*/

function pressurizing(input,output,time) {
    this.type = "vintageimprovements:pressurizing"
    this.ingredients = input
    this.results = output
    this.processingTime = time != undefined ? time : 100
}

pressurizing.prototype = {
    secondaryFluidInputs : function(secondaryFluidInputs){
        this.secondaryFluidInputs = secondaryFluidInputs
        return this
    },
    heatRequirement : function(heatRequirement){
        this.heatRequirement = heatRequirement
        return this
    }
}



ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/vintageimprovements/pressurizing/"
    function pressurizing_recipe(reicpes,id){
        event.custom(reicpes).id(`${id_prefix}${id}`)
    }

    pressurizing_recipe(new pressurizing([items('ae2:matter_ball'),fluids('kubejs:purewater',250)],[items('kubejs:pure_matter_ball')]).secondaryFluidInputs(0).heatRequirement('heated'),'pure_matter_ball')
    pressurizing_recipe(new pressurizing([items('hexerei:moon_dust'),fluids('kubejs:purewater',100)],[fluids('hexerei:quicksilver_fluid',50)],50).secondaryFluidInputs(0).heatRequirement('heated'),'quicksilver')
})