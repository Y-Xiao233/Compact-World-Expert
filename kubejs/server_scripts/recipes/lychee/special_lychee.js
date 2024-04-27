ServerEvents.recipes(event =>{
    const id_prefix = "compact_world:recipes/lychee/special_lychee/"
    
    event.custom({
      "type":"lychee:block_crushing",
      "post":[{"type":"drop_item","item":"apotheosis:gem_dust","count":1}],
      "item_in":[{"item":'kubejs:andesite_alloy_sheet'}],
      "falling_block":"kubejs:swift_alloy_sand",
      "landing_block":"compactmachines:solid_wall"
    }).id(`${id_prefix}block_crushing/gem_dust`)

    event.custom({
      "type":"lychee:block_crushing",
      "post":[{"type":"drop_item","item":'ae2:logic_processor',"count":1}],
      "item_in":[{"item":'ae2:printed_logic_processor'},{"item":'ae2:printed_silicon'},{"item":'kubejs:gaia_nugget'}],
      "falling_block":"kubejs:swift_alloy_sand",
      "landing_block":'spirit:soul_steel_block'
    }).id(`${id_prefix}block_crushing/logic_processor`)

    event.custom({
      "type":"lychee:block_crushing",
      "post":[{"type":"drop_item","item":'ae2:calculation_processor',"count":1}],
      "item_in":[{"item":'ae2:printed_calculation_processor'},{"item":'ae2:printed_silicon'},{"item":'kubejs:gaia_nugget'}],
      "falling_block":"kubejs:swift_alloy_sand",
      "landing_block":'spirit:soul_steel_block'
    }).id(`${id_prefix}block_crushing/calculation_processor`)

    event.custom({
      "type":"lychee:block_crushing",
      "post":[{"type":"drop_item","item":'ae2:engineering_processor',"count":1}],
      "item_in":[{"item":'ae2:printed_engineering_processor'},{"item":'ae2:printed_silicon'},{"item":'kubejs:gaia_nugget'}],
      "falling_block":"kubejs:swift_alloy_sand",
      "landing_block":'spirit:soul_steel_block'
    }).id(`${id_prefix}block_crushing/engineering_processor`)
    
    event.custom({
      "type":"lychee:lightning_channeling",
      "post":[{"type":"drop_item","item":"cwe:mana_sourcelink"}],
      "item_in":[{"item":"botania:mana_pool"},{"item":"spirit:soul_powder_block"},{"item":"ars_nouveau:source_gem_block"},{"item":"ars_nouveau:sourcestone"}]
    }).id(`${id_prefix}mana_sourcelink`)

    event.custom({
      "type":"lychee:lightning_channeling",
      "post":[{"type":"drop_item","item":'ars_nouveau:relay'}],
      "item_in":[{"item":'kubejs:polished_gold_block'},{"item":"spirit:soul_powder_block"},{"item":"ars_nouveau:source_gem_block"}]
    }).id(`${id_prefix}relay`)

    event.custom({
      "type":"lychee:block_interacting",
      "hide_in_viewer":true,
      "post":[{"type":"execute","command":"fill ~ ~ ~ ~ ~ ~ minecraft:air replace ars_nouveau:mob_jar"}],
      "item_in":[{"item":"elementalcraft:drenched_iron_block",},{"item":'naturesaura:token_euphoria'}],
      "block_in":"ars_nouveau:mob_jar"
    })

    event.custom({
      "type":"lychee:block_interacting",
      "ghost":true,
      "contextual":[{"type":"chance","description":"\u00a7a主手拿着\u00a7b浸润铁块，\u00a7a副手拿着\u00a7e欣快印记\u00a7a右键收容罐，可以获得收容了\u00a7f盖亚\u00a7a的收容罐","chance":1},{"type":"chance","description":"\u00a7c该配方仅用于制作收容了盖亚的收容罐，\u00a7a空白收容罐请使用另一种合成方式","chance":1}],
      "post":[{"type":"drop_item","item":'ars_nouveau:mob_jar','nbt':'{BlockEntityTag:{entityId:"botania:doppleganger",entityTag:{id:"botania:doppleganger"}}}'}],
      "item_in":[{"item": "elementalcraft:drenched_iron_block",},{"item":'naturesaura:token_euphoria'}],
      "block_in": "ars_nouveau:mob_jar"
    }).id(`${id_prefix}doppleganger_in_mob_jar`)

    event.custom({
      "type":"lychee:block_interacting",
      "hide_in_viewer":true,
      "post":[{"type":"execute","command":"fill ~ ~ ~ ~ ~ ~ minecraft:air replace ars_nouveau:mob_jar"}],
      "item_in":[{"item":'elementalcraft:elementpipe_creative',},{"item":'botania:gaia_ingot'}],
      "block_in":"ars_nouveau:mob_jar"
    })

    event.custom({
      "type":"lychee:block_interacting",
      "ghost":true,
      "contextual":[{"type":"chance","description":"\u00a7a主手拿着\u00a7b创造元素导管，\u00a7a副手拿着\u00a7e盖亚魂锭\u00a7a右键收容罐，可以获得收容了\u00a7f凋零\u00a7a的收容罐","chance":1},{"type":"chance","description":"\u00a7c该配方仅用于制作收容了凋零的收容罐，\u00a7a空白收容罐请使用另一种合成方式","chance":1}],
      "post":[{"type":"drop_item","item":'ars_nouveau:mob_jar','nbt':'{BlockEntityTag:{entityId:"botania:doppleganger",entityTag:{id:"minecraft:wither"}}}'}],
      "item_in":[{"item": 'elementalcraft:elementpipe_creative',},{"item":'botania:gaia_ingot'}],
      "block_in": "ars_nouveau:mob_jar"
    }).id(`${id_prefix}wither_in_mob_jar`)


    event.custom({
      "type":"lychee:block_crushing",
      "post":[{"type":"drop_item","item":'fluxnetworks:flux_dust',"count":1}],
      "item_in":[{"item":'malum:infernal_spirit'}],
      "falling_block":"kubejs:swift_alloy_sand",
      "landing_block":'malum:runewood_log'
    }).id(`${id_prefix}block_crushing/flux_dust`)
})