ServerEvents.recipes(event => {
  const id_prefix = 'compact_world:recipes/minecraft/crafting_table/shaped/item/'
  /**
  {
   output:,
   pattern:['','',''],
   key:{

   },
   id:`${id_prefix}`
  }
  */
  const recipes = [
    {
      output:'kubejs:cad_assembly_compact',
      pattern:['AAA','A  ','   '],
      key:{
        A: 'kubejs:compact_ingot'
      },
      id:`${id_prefix}cad_assembly_compact`
    },
    {
      output:'kubejs:highly_rough_psimetal',
      pattern:[' B ','BAB',' B '],
      key:{
        A: 'kubejs:compact_ingot',
        B: 'psi:psidust'
      },
      id:`${id_prefix}highly_rough_psimetal`
    },
    {
      output:'psi:spell_bullet',
      pattern:['AB ','   ','   '],
      key:{
        A: 'kubejs:source_dust',
        B: 'kubejs:compact_ingot'
      },
      id:`${id_prefix}spell_bullet`
     },
     {
      output:'psi:cad_socket_basic',
      pattern:['AB ','B  ','   '],
      key:{
        A: 'kubejs:source_dust',
        B: 'kubejs:compact_ingot'
      },
      id:`${id_prefix}cad_socket_basic`
     },
     {
      output:'kubejs:highly_rough_psimetal_pickaxe',
      pattern:['AAA',' B ',' B '],
      key:{
        A: 'kubejs:highly_rough_psimetal',
        B: 'botania:livingwood_twig'
      },
      id:`${id_prefix}highly_rough_psimetal_pickaxe`
     },
     {
      output:'kubejs:highly_rough_psimetal_axe',
      pattern:['AA ','AB ',' B '],
      key:{
        A: 'kubejs:highly_rough_psimetal',
        B: 'botania:livingwood_twig'
      },
      id:`${id_prefix}highly_rough_psimetal_axe`
     },
     {
      output:'kubejs:highly_rough_psimetal_shovel',
      pattern:[' A ',' B ',' B '],
      key:{
        A: 'kubejs:highly_rough_psimetal',
        B: 'botania:livingwood_twig'
      },
      id:`${id_prefix}highly_rough_psimetal_shovel`
     },
     {
      output:'kubejs:highly_rough_psimetal_sword',
      pattern:[' A ',' A ',' B '],
      key:{
        A: 'kubejs:highly_rough_psimetal',
        B: 'botania:livingwood_twig'
      },
      id:`${id_prefix}highly_rough_psimetal_sword`
     },
     {
      output:'kubejs:compact_ingot',
      pattern:['AAA','AAA','AAA'],
      key:{
        A: 'kubejs:compact_nugget'
      },
      id:`${id_prefix}compact_ingot_1`
     },
     {
      output:'psi:cad_core_basic',
      pattern:[' A ','ABA',' A '],
      key:{
        A: 'kubejs:compact_ingot',
        B: 'psi:psidust'
      },
      id:`${id_prefix}cad_core_basic`
     },
     {
      output:'psi:cad_battery_basic',
      pattern:['A  ','B  ','A  '],
      key:{
        A: 'kubejs:rough_psimetal',
        B: 'botania:livingwood_twig'
      },
      id:`${id_prefix}cad_battery_basic`
     },
     {
      output:Item.of('kubejs:psiknife').withNBT('{Damage:31}'),
      pattern:[' A ','B  ','   '],
      key:{
        A: 'psi:psimetal',
        B: 'botania:livingwood_twig'
      },
      id:`${id_prefix}psiknife`
     },
     {
      output:'farmersdelight:cutting_board',
      pattern:['ABB','ABB','   '],
      key:{
        A: 'botania:livingwood_twig',
        B: 'botania:livingwood_log'
      },
      id:`${id_prefix}cutting_board`
    },
    {
      output:'crafting_on_a_stick:crafting_table',
      pattern:['   ',' B ','A  '],
      key:{
        A: 'botania:livingwood_twig',
        B: 'minecraft:crafting_table'
      },
      id:`${id_prefix}crafting_table_on_a_stick`
     },
     {
      output:'2x kubejs:imperfect_andesite_alloy',
      pattern:['   ','AB ','BA '],
      key:{
        A: 'elementalcraft:inert_crystal',
        B: 'minecraft:polished_andesite'
      },
      id:`${id_prefix}imperfect_andesite_alloy`
     },
     {
      output:'elementalcraft:contained_crystal',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'elementalcraft:inert_crystal',
        B: 'minecraft:gold_nugget',
        C: 'kubejs:imperfect_andesite_alloy'
      },
      id:`${id_prefix}contained_crystal`
     },
     {
      output:'minecraft:bucket',
      pattern:['   ','A A',' A '],
      key:{
        A: 'botania:manasteel_ingot'
      },
      id:`${id_prefix}bucket`
     },
     {
      output:'minecraft:wooden_hoe',
      pattern:['AA ',' B ',' B '],
      key:{
        A: 'botania:livingwood',
        B: 'botania:livingwood_twig'
      },
      id:`${id_prefix}wooden_hoe`
     },
     {
      output:'kubejs:swift_alloy_shovel',
      pattern:[' A ',' B ',' B '],
      key:{
        A: 'elementalcraft:swift_alloy_ingot',
        B: 'kubejs:archwood_stick'
      },
      id:`${id_prefix}swift_alloy_shovel`
     },
     {
      output:'4x kubejs:archwood_stick',
      pattern:[' A ',' A ',' A '],
      key:{
        A: 'ars_nouveau:archwood_planks'
      },
      id:`${id_prefix}archwood_stick`
     },
     {
      output:'kubejs:swift_alloy_key',
      pattern:['A  ','B  ','B  '],
      key:{
        A: 'elementalcraft:swift_alloy_ingot',
        B: 'minecraft:gold_nugget'
      },
      id:`${id_prefix}swift_alloy_key`
     },
     {
      output:'ars_nouveau:dominion_wand',
      pattern:[' A ','BCB',' D '],
      key:{
        A: 'ars_nouveau:source_gem_block',
        B: 'kubejs:polished_gold_block',
        C: 'spirit:soul_powder_block',
        D: 'kubejs:archwood_stick'
      },
      id:`${id_prefix}dominion_wand`
     },
     {
      output:'botania:manasteel_shears',
      pattern:['AB ','BA ','   '],
      key:{
        A: 'botania:manasteel_ingot',
        B: 'kubejs:bottle_water'
      },
      id:`${id_prefix}manasteel_shears`
     },
     {
      output:'kubejs:swift_alloy_hand',
      pattern:[' A ','BBB',' B '],
      key:{
        A: 'kubejs:andesite_alloy_sheet',
        B: 'elementalcraft:swift_alloy_nugget'
      },
      id:`${id_prefix}swift_alloy_hand`
     },
     {
      output:'kubejs:gold_whisk',
      pattern:[' B ','ABA','AAA'],
      key:{
        A: 'kubejs:andesite_alloy_sheet',
        B: 'minecraft:gold_ingot'
      },
      id:`${id_prefix}gold_whisk`
     },
     {
      output:Item.of('minecraft:wooden_hoe', '{Damage:0,RepairCost:1,Unbreakable:1b}').enchant('apotheosis:natures_blessing', 7),
      pattern:['CCC','ABA','AAA'],
      key:{
        A: 'minecraft:bone_block',
        B: Item.of('minecraft:wooden_hoe'),
        C: 'hexerei:mindful_trance_blend'
      },
      id:`${id_prefix}natures_blessing_wooden_hoe`
     },
     {
      output:Item.of('8x naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'naturesaura:bottle_two_the_rebottling',
        B: 'kubejs:mana_powder'
      },
      id:`${id_prefix}aura_bottle_overworld`
     },
     {
      output:'naturesaura:sky_ingot',
      pattern:['AAA','AAA','AAA'],
      key:{
        A: 'kubejs:sky_nugget'
      },
      id:`${id_prefix}sky_ingot`
     },
     {
      output:'botania:mana_tablet',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'botania:shimmerrock',
        B: 'botania:mana_powder'
      },
      id:`${id_prefix}mana_tablet`
     },
     {
      output:'3x modularrouters:blank_upgrade',
      pattern:['AAB','ACB',' AB'],
      key:{
        A: 'ae2:fluix_crystal',
        B: 'spirit:soul_steel_ingot',
        C: 'botania:rune_earth'
      },
      id:`${id_prefix}blank_upgrade`
     },
     {
      output:'3x modularrouters:blank_module',
      pattern:[' C ','AAA','BBB'],
      key:{
        A: 'ae2:fluix_crystal',
        B: 'spirit:soul_steel_ingot',
        C: 'botania:rune_earth'
      },
      id:`${id_prefix}blank_module`
     },
     {
      output:'modularrouters:activator_module',
      pattern:['ABA','CDC','AEA'],
      key:{
        A: 'create:andesite_alloy',
        B: 'minecraft:lever',
        C: 'minecraft:dispenser',
        D: 'modularrouters:blank_module',
        E: 'apotheosis:common_material'
      },
      id:`${id_prefix}activator_module`
     },
     {
      output:'4x modularrouters:sender_module_1',
      pattern:['BCB','CAC','BCB'],
      key:{
        A: 'modularrouters:blank_module',
        B: 'apotheosis:mythic_material',
        C: 'minecraft:piston'
      },
      id:`${id_prefix}sender_module_1`
     },
     {
      output:'4x modularrouters:distributor_module',
      pattern:[' A ','ABA',' A '],
      key:{
        A: 'modularrouters:sender_module_2',
        B: 'spirit:soul_steel_block'
      },
      id:`${id_prefix}distributor_module`
     },
     {
      output:'4x modularrouters:puller_module_1',
      pattern:['BCB','CAC','BCB'],
      key:{
        A: 'modularrouters:blank_module',
        B: 'apotheosis:mythic_material',
        C: 'minecraft:sticky_piston'
      },
      id:`${id_prefix}puller_module_1`
     },
     {
      output:'2x modularrouters:vacuum_module',
      pattern:['CBC','CAC','CBC'],
      key:{
        A: 'modularrouters:blank_module',
        B: 'minecraft:hopper',
        C: 'apotheosis:common_material'
      },
      id:`${id_prefix}vaccum_module`
     },
     {
      output:'modularrouters:player_module',
      pattern:[' A ','CBC',' A '],
      key:{
        A: 'spirit:soul_powder',
        B: 'botania:rune_earth',
        C: 'modularrouters:blank_module'
      },
      id:`${id_prefix}player_module`
     },
     {
      output:'2x modularrouters:energy_output_module',
      pattern:[' A ','CBC',' D '],
      key:{
        A: 'ae2:fluix_block',
        B: 'modularrouters:blank_module',
        C: 'psi:psimetal',
        D: 'kubejs:soul_steel_sheet'
      },
      id:`${id_prefix}energy_output_module`
     },
     {
      output:'2x modularrouters:energy_upgrade',
      pattern:[' A ','CBC',' D '],
      key:{
        A: 'ae2:fluix_block',
        B: 'modularrouters:blank_upgrade',
        C: 'psi:psimetal',
        D: 'kubejs:soul_steel_sheet'
      },
      id:`${id_prefix}energy_upgrade`
     },
     {
      output:'4x modularrouters:range_up_augment',
      pattern:[' B ','BCB',' A '],
      key:{
        A: 'apotheosis:rare_material',
        B: 'ae2:fluix_crystal',
        C: 'modularrouters:augment_core'
      },
      id:`${id_prefix}range_up_augment`
     },
     {
      output:'4x modularrouters:range_down_augment',
      pattern:[' A ','BCB',' B '],
      key:{
        A: 'apotheosis:rare_material',
        B: 'ae2:fluix_crystal',
        C: 'modularrouters:augment_core'
      },
      id:`${id_prefix}range_down_augment`
     },
     {
      output:'tiab:time_in_a_bottle',
      pattern:['AAA','CBC','CDC'],
      key:{
        A: 'kubejs:soul_steel_sheet',
        B: 'minecraft:clock',
        C: 'botania:rune_earth',
        D: 'kubejs:bottle_water'
      },
      id:`${id_prefix}time_in_a_bottle`
     },
     {
      output:'botania:terrasteel_ingot',
      pattern:[' B ','BAB',' B '],
      key:{
        A: 'elementalcraft:drenched_iron_ingot',
        B: 'kubejs:terra_essence'
      },
      id:`${id_prefix}terrasteel_ingot`
     },
     {
      output:'botania:gaia_ingot',
      pattern:['AAA','AAA','AAA'],
      key:{
        A: 'kubejs:gaia_nugget'
      },
      id:`${id_prefix}gaia_ingot_from_nugget`
     },
     {
      output:'minecraft:nether_star',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'botania:gaia_ingot',
        B: 'minecraft:wither_rose',
        C: 'elementalcraft:elementpipe_creative'
      },
      id:`${id_prefix}nether_star`
     },
     {
      output:'2x mekanism:upgrade_energy',
      pattern:[' A ','BCB',' A '],
      key:{
        A: 'kubejs:gaia_nugget',
        B: 'ae2:logic_processor',
        C: 'minecraft:redstone'
      },
      id:`${id_prefix}upgrade_energy`
     },
     {
      output:'2x mekanism:upgrade_speed',
      pattern:[' A ','BCB',' A '],
      key:{
        A: 'kubejs:gaia_nugget',
        B: 'ae2:engineering_processor',
        C: 'minecraft:redstone'
      },
      id:`${id_prefix}upgrade_speed`
     },
     {
      output:'entangled:item',
      pattern:[' AB',' CA','C  '],
      key:{
        A: 'minecraft:redstone',
        B: 'minecraft:nether_star',
        C: 'spirit:soul_steel_ingot'
      },
      id:`${id_prefix}entangled_item`
     },
     {
      output:'4x powah:capacitor_basic_tiny',
      pattern:[' AB','ACA','BA '],
      key:{
        A: 'ae2:certus_quartz_crystal',
        B: 'minecraft:black_dye',
        C: 'create_new_age:blank_circuit'
      },
      id:`${id_prefix}capacitor_basic_tiny`
     },
     {
      output:'naturesaura:token_fear',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'industrialforegoing:tinydryrubber',
        B: 'naturesaura:token_euphoria'
      },
      id:`${id_prefix}token_fear`
     },
     {
      output:'4x ae2:annihilation_core',
      pattern:['ABC','   ','   '],
      key:{
        A: 'kubejs:gaia_nugget',
        B: 'industrialforegoing:tinydryrubber',
        C: 'ae2:engineering_processor'
      },
      id:`${id_prefix}annihilation_core`
     },
     {
      output:'4x ae2:formation_core',
      pattern:['ABC','   ','   '],
      key:{
        A: 'ae2:logic_processor',
        B: 'industrialforegoing:tinydryrubber',
        C: 'kubejs:gaia_nugget'
      },
      id:`${id_prefix}formation_core`
     },
     {
      output:'ae2:item_cell_housing',
      pattern:['CBC','BDB','AAA'],
      key:{
        A: 'naturesaura:depth_ingot',
        B: 'botania:gaia_ingot',
        C: 'ae2:quartz_glass',
        D: 'minecraft:chest'
      },
      id:`${id_prefix}item_cell_housing`
     },
     {
      output:'appbot:mana_cell_housing',
      pattern:['CBC','BDB','AAA'],
      key:{
        A: 'naturesaura:depth_ingot',
        B: 'botania:gaia_ingot',
        C: 'ae2:quartz_glass',
        D: 'botania:fabulous_pool'
      },
      id:`${id_prefix}mana_cell_housing`
     },
     {
      output:'arseng:source_cell_housing',
      pattern:['CBC','BDB','AAA'],
      key:{
        A: 'naturesaura:depth_ingot',
        B: 'botania:gaia_ingot',
        C: 'ae2:quartz_glass',
        D: 'ars_nouveau:source_jar'
      },
      id:`${id_prefix}source_cell_housing`
     },
     {
      output:'appmek:chemical_cell_housing',
      pattern:['CBC','BDB','AAA'],
      key:{
        A: 'naturesaura:depth_ingot',
        B: 'botania:gaia_ingot',
        C: 'ae2:quartz_glass',
        D: 'mekanism:basic_chemical_tank'
      },
      id:`${id_prefix}chemical_cell_housing`
     },
     {
      output:'ae2:fluid_cell_housing',
      pattern:['CBC','BDB','AAA'],
      key:{
        A: 'naturesaura:depth_ingot',
        B: 'botania:gaia_ingot',
        C: 'ae2:quartz_glass',
        D: 'create:fluid_tank'
      },
      id:`${id_prefix}fluid_cell_housing`
     },
     {
      output:'4x ae2:blank_pattern',
      pattern:['ABA','BCB','DDD'],
      key:{
        A: 'ae2:quartz_glass',
        B: 'naturesaura:infused_iron',
        C: 'kubejs:gaia_nugget',
        D: 'create_new_age:blank_circuit'
      },
      id:`${id_prefix}blank_pattern`
     },
     {
      output:'ae2:wireless_booster',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'minecraft:diamond',
        B: 'modularrouters:augment_core',
        C: 'ae2:fluix_dust'
      },
      id:`${id_prefix}wireless_booster`
     },
     {
      output:'aeinfinitybooster:dimension_card',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'ae2:wireless_booster',
        B: 'minecraft:nether_star',
        C: 'entangled:block'
      },
      id:`${id_prefix}dimension_card`
     },
     {
      output:Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'),
      pattern:['ABC','   ','   '],
      key:{
        A: 'ae2:cell_component_16k',
        B: 'minecraft:water_bucket',
        C: 'minecraft:nether_star'
      },
      id:`${id_prefix}infinity_cell/water`
     },
     {
      output:Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
      pattern:['ABC','   ','   '],
      key:{
        A: 'ae2:cell_component_16k',
        B: 'cobblefordays:tier_5',
        C: 'minecraft:nether_star'
      },
      id:`${id_prefix}infinity_cell/cobblestone`
     },
     {
      output:'expatternprovider:drive_upgrade',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:diamond',
        B: 'ae2:capacity_card',
        C: 'ae2:engineering_processor'
      },
      id:`${id_prefix}drive_upgrade`
     },
     {
      output:'expatternprovider:pattern_provider_upgrade',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:diamond',
        B: 'ae2:capacity_card',
        C: 'minecraft:crafting_table'
      },
      id:`${id_prefix}pattern_provider_upgrade`
     },
     {
      output:'expatternprovider:interface_upgrade',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:diamond',
        B: 'ae2:capacity_card',
        C: 'botania:mana_glass'
      },
      id:`${id_prefix}interface_upgrade`
     },
     {
      output:'expatternprovider:io_bus_upgrade',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:diamond',
        B: 'ae2:speed_card',
        C: 'ae2:engineering_processor'
      },
      id:`${id_prefix}io_bus_upgrade`
     },
     {
      output:'laserio:logic_chip_raw',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:gold_nugget',
        B: 'minecraft:cobblestone',
        C: 'elementalcraft:inert_crystal'
      },
      id:`${id_prefix}logic_chip_raw`
     },
     {
      output:Item.of('kubejs:psiknife', '{Unbreakable:1b}'),
      pattern:['ABA','DCD','ABA'],
      key:{
        A: 'minecraft:gold_block',
        B: 'laserio:logic_chip',
        C: Item.of('kubejs:psiknife'),
        D: 'elementalcraft:swift_alloy_ingot'
      },
      id:`${id_prefix}unbreakable_psiknife`
     },
     {
      output:'thermal:chiller_ball_cast',
      pattern:[' A ','ABA',' A '],
      key:{
        A: 'naturesaura:depth_ingot',
        B: 'create:dough'
      },
      id:`${id_prefix}chiller_ball_cast`
     },
     {
      output:'kubejs:sky_key',
      pattern:['A  ','B  ','B  '],
      key:{
        A: 'naturesaura:sky_ingot',
        B: 'kubejs:sky_nugget'
      },
      id:`${id_prefix}sky_key`
     },
     {
      output:'ironfurnaces:augment_generator',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'botania:manasteel_ingot',
        B: 'hexerei:moon_dust',
        C: 'laserio:logic_chip'
      },
      id:`${id_prefix}augment_generator`
     },
     {
      output:Item.of('kubejs:swift_alloy_shovel', '{Unbreakable:1b}'),
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'elementalcraft:swift_alloy_block',
        B: Item.of('kubejs:swift_alloy_shovel'),
      },
      id:`${id_prefix}unbreakable_swift_alloy_shovel`
     },
     {
      output:'mekanism:basic_tier_installer',
      pattern:['ABA','CDC','ABA'],
      key:{
        A: 'minecraft:redstone',
        B: 'ae2:calculation_processor',
        C: 'ae2:engineering_processor',
        D: 'botania:gaia_ingot'
      },
      id:`${id_prefix}basic_tier_installer`
     },
     {
      output:'ironfurnaces:augment_speed',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'apotheosis:uncommon_material',
        B: 'minecraft:paper',
        C: 'minecraft:sugar'
      },
      id:`${id_prefix}`
     },
     {
      output:'thermal:item_filter_augment',
      pattern:['AA ','AA ','   '],
      key:{
        A: 'minecraft:paper'
      },
      id:`${id_prefix}item_filter_augment`
     },
     {
      output:Item.of('kubejs:rainbow_pickaxe', '{Unbreakable:1b}').weakNBT(),
      pattern:['AAA',' B ',' B '],
      key:{
        A: 'kubejs:rainbow_ingot',
        B: 'minecraft:stick'
      },
      id:`${id_prefix}rainbow_pickaxe`
     },
     {
      output:'functionalstorage:iron_downgrade',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'psi:psimetal',
        B: 'kubejs:functionalstorage_upgrade_base'
      },
      id:`${id_prefix}iron_downgrade_1`
     },
     {
      output:'4x functionalstorage:iron_downgrade',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'minecraft:iron_ingot',
        B: 'kubejs:functionalstorage_upgrade_base'
      },
      id:`${id_prefix}iron_downgrade_2`
     },
     {
      output:'sophisticatedstorage:storage_tool',
      pattern:['  A',' B ','B  '],
      key:{
        A: 'ae2:certus_quartz_crystal',
        B: 'minecraft:stick'
      },
      id:`${id_prefix}storage_tool`
     },
     {
      output:'ae2:certus_quartz_cutting_knife',
      pattern:['  A',' A ','BB '],
      key:{
        A: 'minecraft:stick',
        B: 'ae2:certus_quartz_crystal'
      },
      id:`${id_prefix}certus_quartz_cutting_knife`
     },
     {
      output:Item.of('industrialforegoing:efficiency_addon_2', '{TitaniumAugment:{Efficiency:0.8f}}'),
      pattern:['AB ','CD ','   '],
      key:{
        A: 'minecraft:redstone',
        B: 'create_new_age:blank_circuit',
        C: 'naturesaura:token_fear',
        D: 'ae2:logic_processor'
      },
      id:`${id_prefix}efficiency_addon_2`
     },
     {
      output:Item.of('industrialforegoing:speed_addon_2', '{TitaniumAugment:{Speed:3.0f}}'),
      pattern:['AB ','CD ','   '],
      key:{
        A: 'minecraft:redstone',
        B: 'create_new_age:blank_circuit',
        C: 'naturesaura:token_fear',
        D: 'ae2:calculation_processor'
      },
      id:`${id_prefix}speed_addon_2`
     },
     {
      output:Item.of('industrialforegoing:processing_addon_2', '{TitaniumAugment:{Processing:3.0f}}'),
      pattern:['AB ','CD ','   '],
      key:{
        A: 'minecraft:redstone',
        B: 'create_new_age:blank_circuit',
        C: 'naturesaura:token_fear',
        D: 'ae2:engineering_processor'
      },
      id:`${id_prefix}processing_addon_2`
     },
     {
      output:'kubejs:rainbow_nugget',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'powah:crystal_nitro',
        B: 'createcasing:chorium_ingot'
      },
      id:`${id_prefix}rainbow_nugget`
     }]
  
  recipes.forEach(recipe =>{
    event.shaped(recipe.output,recipe.pattern,recipe.key).id(recipe.id)
  })

  event.shaped('8x elementalcraft:swift_alloy_ingot',['AAA','ABA','AAA'],{A:'minecraft:gold_ingot',B:'minecraft:lava_bucket'}).replaceIngredient('minecraft:lava_bucket', 'minecraft:bucket').id(`${id_prefix}swift_alloy_ingot`)
})