ServerEvents.recipes(event =>{
    const id_prefix = 'compact_world:recipes/custom_machinery/fake_mana_pool/'

    function fake_mana_pool(output_item,hand_item,fire_amounts,water_amounts,earth_amounts,air_amounts,source,mana,tick,id){
        event.recipes.custommachinery.custom_machine('cwe:fake_mana_pool',tick)
        .requireItem(Item.of('botania:mana_tablet').withNBT(`{mana:${mana},display:{Name:'{"text":"魔力池里需要魔力-需要${mana}魔力"}'}}`).enchant('kubejs:world_crafting',1).weakNBT(),"slot4")
        .requireItem(Item.of('kubejs:fake_source').withNBT({display:{Name:`{"text":"每个魔源罐中都需要${source}魔源-总共需要${source*4}魔源"}`}}).enchant('kubejs:world_crafting',1).weakNBT(),"slot7")
        .requireItem(Item.of('elementalcraft:element_holder_air').withNBT(`{element_amount:${air_amounts},display:{Name:'{"text":"元素容器中需要有这种元素-需要${air_amounts}气元素"}'}}`).enchant('kubejs:world_crafting',1).weakNBT(),"slot1")
        .requireItem(Item.of('elementalcraft:element_holder_water').withNBT(`{element_amount:${water_amounts},display:{Name:'{"text":"元素容器中需要有这种元素-需要${water_amounts}水元素"}'}}`).enchant('kubejs:world_crafting',1).weakNBT(),"slot2")
        .requireItem(Item.of('elementalcraft:element_holder_fire').withNBT(`{element_amount:${fire_amounts},display:{Name:'{"text":"元素容器中需要有这种元素-需要${fire_amounts}火元素"}'}}`).enchant('kubejs:world_crafting',1).weakNBT(),"slot3")
        .requireItem(Item.of('elementalcraft:element_holder_earth').withNBT(`{element_amount:${earth_amounts},display:{Name:'{"text":"元素容器中需要有这种元素-需要${earth_amounts}地元素"}'}}`).enchant('kubejs:world_crafting',1).weakNBT(),"slot0")
        .requireItem(Item.of(hand_item).withNBT({display:{Name:'{"text":"主手拿着这个物品右键魔力池\u00a7c(此物品不会被消耗)"}'}}).enchant('kubejs:world_crafting',1).weakNBT(),"slot5")
        .produceItem(output_item,"slot6")
        .id(id)

        return fake_mana_pool
    }
    
    fake_mana_pool('botania:mana_diamond','minecraft:diamond',1000,1000,1000,1000,1000,10000,50,`${id_prefix}mana_diamond`)
    fake_mana_pool('minecraft:blaze_spawn_egg','naturesaura:depth_ingot',5000,1000,1000,1000,5000,5000,50,`${id_prefix}blaze_spawn_egg`)
})