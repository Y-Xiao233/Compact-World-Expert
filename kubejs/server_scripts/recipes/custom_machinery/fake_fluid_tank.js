ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/fake_fluid_tank/'

    function fake_fluid_tank(tick,hand_item,item1,item1_count,item2,item2_count,item3,item3_count,item4,item4_count,fluid,fluid_amount,output,id){
        event.recipes.custommachinery.custom_machine('cwe:fake_fluid_tank',tick)
        .requireFluid(Fluid.of(fluid,fluid_amount))
        .requireItem(Item.of(item1,item1_count))
        .requireItem(Item.of(item2,item2_count))
        .requireItem(Item.of(item3,item3_count))
        .requireItem(Item.of(item4,item4_count))
        .requireItem(Item.of(hand_item).withNBT({display:{Name:'{"text":"主手拿着这个物品右键流体储罐"}'}}).enchant('kubejs:world_crafting',1).weakNBT(),"slot5")
        .produceItem(output,"slot6")
        .id(id)

        return fake_fluid_tank
    }
    
    fake_fluid_tank(60,'ars_nouveau:dominion_wand','kubejs:soul_gem',1,'botania:rune_water',1,'elementalcraft:drenched_iron_ingot',1,'naturesaura:token_euphoria',1,'minecraft:lava',2000,'ars_nouveau:drygmy_charm',`${id_prefix}drygmy_charm`)
    fake_fluid_tank(60,'ars_nouveau:dominion_wand','kubejs:gem_earth',1,'kubejs:gem_earth',1,'minecraft:polished_andesite',1,'minecraft:polished_andesite',1,'minecraft:water',4000,'minecraft:mossy_cobblestone',`${id_prefix}mossy_cobblestone`)
    fake_fluid_tank(60,'naturesaura:token_euphoria','create:andesite_casing',1,'elementalcraft:purecrystal',1,'botania:terrasteel_nugget',1,'kubejs:soul_gem',1,'kubejs:liquid_soul',200,'industrialforegoing:machine_frame_pity',`${id_prefix}machine_frame_pity`)
    fake_fluid_tank(60,'ars_nouveau:dominion_wand','industrialforegoing:machine_frame_pity',1,'botania:terrasteel_ingot',1,'create:fluid_tank',1,'kubejs:soul_gem',1,'kubejs:liquid_soul',1000,'industrialforegoing:dissolution_chamber',`${id_prefix}dissolution_chamber`)
    fake_fluid_tank(60,'ars_nouveau:dominion_wand','botania:gaia_ingot',1,'botania:gaia_ingot',1,'naturesaura:token_euphoria',1,'naturesaura:token_euphoria',1,'kubejs:liquid_soul',200,'ars_nouveau:starbuncle_charm',`${id_prefix}starbuncle_charm`)
})