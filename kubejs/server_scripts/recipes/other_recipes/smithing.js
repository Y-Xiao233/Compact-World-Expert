ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/other_recipes/smithing/'
    /**
    {
     output:,
     base_input:,
     addition_input:,
     id:`${id_prefix}`
    }
    */
    const recipes = [
        {
            output:'functionalstorage:gold_upgrade',
            base_input:'kubejs:functionalstorage_upgrade_base',
            addition_input:'minecraft:gold_block',
            id:`${id_prefix}functionalstorage_gold_upgrade`
        },
        {
            output:'sophisticatedstorage:stack_upgrade_tier_3',
            base_input:'sophisticatedstorage:upgrade_base',
            addition_input:'minecraft:gold_block',
            id:`${id_prefix}sophisticatedstorage_stack_upgrade_tier_3`
        },
        {
            output:'sophisticatedstorage:basic_to_gold_tier_upgrade',
            base_input:'sophisticatedstorage:upgrade_base',
            addition_input:'minecraft:gold_block',
            id:`${id_prefix}sophisticatedstorage_basic_to_gold_tier_upgrade`
        },
        {
            output:'sophisticatedbackpacks:stack_upgrade_tier_2',
            base_input:'sophisticatedbackpacks:upgrade_base',
            addition_input:'minecraft:gold_block',
            id:`${id_prefix}sophisticatedbackpacks_stack_upgrade_tier_2`
        },
        {
            output:'create:mechanical_saw',
            base_input:'create:andesite_casing',
            addition_input:'elementalcraft:drenched_saw_blade',
            id:`${id_prefix}mechanical_saw`
        }]

    recipes.forEach(recipe =>{
        event.recipes.minecraft.smithing(recipe.output,recipe.base_input,recipe.addition_input).id(recipe.id)
    })
})