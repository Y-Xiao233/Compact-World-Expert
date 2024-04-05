ServerEvents.recipes(event => {
    const id_prefix = 'compact_world:recipes/crafting_table/shapeless/item/'
    /**
    {
     output:,
     output_amount:,
     input:[],
     id:`${id_prefix}`
    }
   */
    const recipes = [
        {
            output:'ars_nouveau:source_gem',
            output_amount:9,
            input:['ars_nouveau:source_gem_block'],
            id:`${id_prefix}source_gem_2`
        },
        {
            output:'kubejs:compact_ingot',
            output_amount:9,
            input:['kubejs:compact_block'],
            id:`${id_prefix}compact_ingot_2`
        },
        {
            output:'kubejs:compact_nugget',
            output_amount:9,
            input:['kubejs:compact_ingot'],
            id:`${id_prefix}compact_nugget`
        },
        {
            output:'minecraft:flint_and_steel',
            output_amount:1,
            input:['elementalcraft:firecrystal','minecraft:flint'],
            id:`${id_prefix}flint_and_steel`
        },
        {
            output:'spirit:soul_powder',
            output_amount:4,
            input:['spirit:soul_powder_block'],
            id:`${id_prefix}soul_powder_from_block`
        },
        {
            output:'ars_nouveau:apprentice_spell_book',
            output_amount:1,
            input:['minecraft:book','minecraft:purple_dye'],
            id:`${id_prefix}apprentice_spell_book`
        },
        {
            output:'compactmachines:personal_shrinking_device',
            output_amount:1,
            input:['psi:psimetal'],
            id:`${id_prefix}personal_shrinking_device`
        },
        {
            output:'ae2:fluix_crystal',
            output_amount:4,
            input:['ae2:fluix_block'],
            id:`${id_prefix}fluix_crystal`
        },
        {
            output:'kubejs:sky_nugget',
            output_amount:9,
            input:['naturesaura:sky_ingot'],
            id:`${id_prefix}sky_nugget`
        },
        {
            output:'mythicbotany:gjallar_horn_empty',
            output_amount:1,
            input:['botania:horn_grass','botania:rune_earth'],
            id:`${id_prefix}gjallar_horn_empty`
        },
        {
            output:'spirit:soul_steel_ingot',
            output_amount:9,
            input:['spirit:soul_steel_block'],
            id:`${id_prefix}soul_steel_ingot`
        },
        {
            output:'ae2:speed_card',
            output_amount:1,
            input:['modularrouters:augment_core','ae2:fluix_crystal'],
            id:`${id_prefix}speed_card`
        },
        {
            output:'minecraft:diamond_pickaxe',
            output_amount:1,
            input:['spirit:soul_steel_pickaxe'],
            id:`${id_prefix}diaamond_pickaxe`
        },
        {
            output:'minecraft:iron_pickaxe',
            output_amount:1,
            input:['kubejs:highly_rough_psimetal_pickaxe'],
            id:`${id_prefix}iron_pickaxe`
        },
        {
            output:'modularrouters:mimic_augment',
            output_amount:1,
            input:['modularrouters:augment_core','kubejs:obsidian','apotheosis:mythic_material','apotheosis:epic_material'],
            id:`${id_prefix}mimic_augment`
        },
        {
            output:'kubejs:gaia_nugget',
            output_amount:9,
            input:['botania:gaia_ingot'],
            id:`${id_prefix}gaia_nugget_from_ingot`
        }]

    recipes.forEach(recipe =>{
        event.shapeless(Item.of(recipe.output,recipe.output_amount),recipe.input).id(recipe.id)
    })
})


//以下代码由美式红茶x提供
ServerEvents.recipes(event =>{
    event.shapeless(Item.of('kubejs:psiknife'),[Ingredient.of('kubejs:psiknife'),Ingredient.of('ars_nouveau:source_gem')])
            .modifyResult(
                /**
                 * @param {Internal.ModifyRecipeCraftingGrid} inventory
                 */
                function(inventory, itemStack){
                    let knife_nbt = inventory.find(Item.of('kubejs:psiknife')).nbt;
                    if(knife_nbt.get('Damage') == 0)
                        event.cancel()
                    itemStack.setDamageValue(knife_nbt.get('Damage') - 1)
                    return itemStack
                })
})