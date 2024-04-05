ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/farmdelight/cooking/'
    /**
    {
     inputItem:[
     {}
     ], //max inputItem:6
     output:,
     output_amount:,
     recipe_book_tab:,
     experience:,
     time:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            inputItem:[
            {"item":'naturesaura:gold_leaf'},
            {"item":'naturesaura:gold_leaf'},
            {"item":'naturesaura:gold_leaf'},
            {"item":'naturesaura:gold_fiber'},
            {"item":'naturesaura:gold_fiber'},
            {"item":'naturesaura:gold_fiber'}
            ], //max inputItem:6
            output:'minecraft:gold_nugget',
            output_amount:12,
            recipe_book_tab:"misc",
            experience:0.35,
            time:20,
            id:`${id_prefix}gold_nuggt`
        }]

    recipes.forEach(recipe =>{
        event.custom({
            "type": "farmersdelight:cooking",
            "cookingtime":recipe.time,
            "experience":recipe.experience,
            "ingredients":recipe.inputItem,
            "recipe_book_tab":recipe.recipe_book_tab,
            "result": {"item": recipe.output,"count": recipe.output_amount}
        }).id(recipe.id)
    })
})