ServerEvents.recipes(event => {
    const id_prefix = 'compact_world:recipes/create/deploying/'
    /**
    {
     output:,
     input:,
     hand_item:,
     keepHeldItem:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            output:'2x minecraft:polished_andesite',
            input:'minecraft:andesite',
            hand_item:'#cwe:twig_wand',
            keepHeldItem:true,
            id:`${id_prefix}polished_andesite`
        },
        {
            output:'create:large_cogwheel',
            input:'create:cogwheel',
            hand_item:'apotheosis:gem_dust',
            keepHeldItem:false,
            id:`${id_prefix}large_cogwheel`
        },
        {
            output:'2x kubejs:imperfect_andesite_alloy',
            input:'minecraft:polished_andesite',
            hand_item:'elementalcraft:inert_crystal',
            keepHeldItem:false,
            id:`${id_prefix}imperfect_andesite_alloy`
        }]

    recipes.forEach(recipe =>{
        if(recipe.keepHeldItem == false){
            event.recipes.create.deploying(recipe.output,[recipe.input,recipe.hand_item]).id(recipe.id)
        }else{
            event.recipes.create.deploying(recipe.output,[recipe.input,recipe.hand_item]).id(recipe.id).keepHeldItem()
        }
    })
})