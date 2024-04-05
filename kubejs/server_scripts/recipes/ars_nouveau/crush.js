ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/ars_nouveau/crush/'
    /**
    {
     input:,
     output:[
        
     ],
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            input:'ars_nouveau:sourcestone',
            output:[
            {"item":"create:limestone","count":1,"chance":1.0}],
            id:`${id_prefix}limestone`
        },
        {
            input:'minecraft:gold_ingot',
            output:[
            {"item":'thermal:gold_dust',"count":1,"chance":1.0}
            ],
            id:`${id_prefix}gold_dust`
           },
           {
            input:'kubejs:functionalstorage_upgrade_base',
            output:[
            {"item":'functionalstorage:linking_tool',"count":1,"chance":1.0},
            {"item":'functionalstorage:configuration_tool',"count":1,"chance":1.0}
            ],
            id:`${id_prefix}functionalstorage_tools`
           }]

    recipes.forEach(recipe =>{
        event.custom({
            "type":"ars_nouveau:crush",
            "input":{"item":recipe.input},
            "output":recipe.output,
            "skip_block_place":false
        }).id(recipe.id)
    })
})