ServerEvents.recipes(event => {
    const id_prefix = 'compact_world:recipes/minecraft/crafting_table/shapeless/item/'
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
            input:['minecraft:book','botania:purple_petal'],
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
            id:`${id_prefix}diamond_pickaxe`
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
        },
        {
            output:'minecraft:light_gray_dye',
            output_amount:2,
            input:['minecraft:black_dye','minecraft:white_dye'],
            id:`${id_prefix}light_gray_dye`
        },
        // {
        //     output:'industrialforegoing:processing_addon_2',
        //     output_amount:2,
        //     input:['minecraft:redstone','create_new_age:blank_circuit','naturesaura:token_fear','ae2:engineering_processor'],
        //     id:`${id_prefix}processing_addon_2`
        // },
        // {
        //     output:'industrialforegoing:efficiency_addon_2',
        //     output_amount:2,
        //     input:['minecraft:redstone','create_new_age:blank_circuit','naturesaura:token_fear','ae2:logic_processor'],
        //     id:`${id_prefix}efficiency_addon_2`
        // },
        // {
        //     output:'industrialforegoing:speed_addon_2',
        //     output_amount:2,
        //     input:['minecraft:redstone','create_new_age:blank_circuit','naturesaura:token_fear','ae2:calculation_processor'],
        //     id:`${id_prefix}speed_addon_2`
        // },
        {
            output:'ae2:quantum_entangled_singularity',
            output_amount:2,
            input:['minecraft:diamond','ae2:singularity'],
            id:`${id_prefix}quantum_entangled_singularity`
        },
        {
            output:'laserio:card_fluid',
            output_amount:1,
            input:['laserio:logic_chip','minecraft:bucket'],
            id:`${id_prefix}card_fluid`
        },
        {
            output:'laserio:card_item',
            output_amount:1,
            input:['laserio:logic_chip','minecraft:chest'],
            id:`${id_prefix}card_item`
        },
        {
            output:'laserio:card_energy',
            output_amount:1,
            input:['laserio:logic_chip','apotheosis:epic_material'],
            id:`${id_prefix}card_energy`
        },
        {
            output:'laserio:card_redstone',
            output_amount:1,
            input:['laserio:logic_chip','minecraft:redstone'],
            id:`${id_prefix}card_redstone`
        },
        {
            output:'create:blaze_burner',
            output_amount:1,
            input:['create:empty_blaze_burner','minecraft:blaze_spawn_egg'],
            id:`${id_prefix}blaze_burner`
        },
        {
            output:'thermal:apatite',
            output_amount:9,
            input:['thermal:apatite_block'],
            id:`${id_prefix}apatite`
        },
        {
            output:'xnet:connector_upgrade',
            output_amount:4,
            input:['minecraft:paper','minecraft:diamond'],
            id:`${id_prefix}connector_upgrade`
        },
        {
            output:'powah:capacitor_basic',
            output_amount:1,
            input:['powah:capacitor_basic_tiny','mekanism:nugget_steel','mekanism:nugget_steel','mekanism:nugget_steel'],
            id:`${id_prefix}capactior_basic`
        },
        {
            output:'sophisticatedstorage:packing_tape',
            output_amount:1,
            input:['kubejs:gem_earth','minecraft:paper'],
            id:`${id_prefix}packing_tape`
        },
        {
            output:'sophisticatedstorage:stack_upgrade_tier_3',
            output_amount:1,
            input:['sophisticatedstorage:upgrade_base','minecraft:gold_block'],
            id:`${id_prefix}stack_upgrade_tier_3`
        }]

    recipes.forEach(recipe =>{
        event.shapeless(Item.of(recipe.output,recipe.output_amount),recipe.input).id(recipe.id)
    })

    event.shapeless(Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:item"}}'),['elementalcraft:swift_alloy_ingot','elementalcraft:contained_crystal','minecraft:chest']).id(`${id_prefix}tunnel/item`)
    event.shapeless(Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:fluid"}}'),['elementalcraft:swift_alloy_ingot','elementalcraft:contained_crystal','minecraft:bucket']).id(`${id_prefix}tunnel/fluid`)
    event.shapeless(Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:energy"}}'),['elementalcraft:swift_alloy_ingot','elementalcraft:contained_crystal','minecraft:redstone']).id(`${id_prefix}tunnel/energy`)
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
                    if(knife_nbt.get('Damage') == 0){
                        return itemStack
                    }
                    itemStack.setDamageValue(knife_nbt.get('Damage') - 1)
                    return itemStack
                })
})