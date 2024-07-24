ServerEvents.recipes(event => {
  const id_prefix = 'compact_world:recipes/minecraft/crafting_table/shaped/block/'
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
      output:'compactmachines:wall',
      pattern:['AA ','AA ','   '],
      key:{
        A: 'kubejs:compact_dust'
      },
      id:`${id_prefix}wall`
    },
    {
      output:'psi:cad_assembler',
      pattern:['A  ','B  ','   '],
      key:{
        A: 'kubejs:compact_ingot',
        B: 'compactmachines:wall'
      },
      id:`${id_prefix}cad_assembly`
    },
    {
      output:'cyclic:workbench',
      pattern:['AA ','AA ','   '],
      key:{
        A: 'compactmachines:wall'
      },
      id:`${id_prefix}workbench`
     },
     {
      output:'ars_nouveau:source_gem_block',
      pattern:['AAA','AAA','AAA'],
      key:{
        A: 'ars_nouveau:source_gem'
      },
      id:`${id_prefix}source_gem_block_2`
     },
     {
      output:'kubejs:compact_block',
      pattern:['AAA','AAA','AAA'],
      key:{
        A: 'kubejs:compact_ingot'
      },
      id:`${id_prefix}compact_block`
     },
     {
      output:'minecraft:furnace',
      pattern:['AAA','A A','AAA'],
      key:{
        A: 'compactmachines:wall'
      },
      id:`${id_prefix}furnace`
     },
     {
      output:'botania:floating_pure_daisy',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'minecraft:wheat_seeds',
        B: 'kubejs:source_psicoal',
        C: 'minecraft:grass_block'
      },
      id:`${id_prefix}floating_pure_daisy`
     },
     {
      output:'minecraft:chest',
      pattern:['AAA','A A','AAA'],
      key:{
        A: 'botania:livingwood_planks'
      },
      id:`${id_prefix}chest_from_planks`
     },
     {
      output:'4x minecraft:chest',
      pattern:['AAA','A A','AAA'],
      key:{
        A: '#botania:livingwood_logs'
      },
      id:`${id_prefix}chest_from_logs`
     },
     {
      output:'minecraft:barrel',
      pattern:['ABA','A A','ABA'],
      key:{
        A: 'botania:livingwood_planks',
        B: 'botania:livingwood_planks_slab'
      },
      id:`${id_prefix}barrel`
     },
     {
      output:'minecraft:campfire',
      pattern:[' A ','ABA','CCC'],
      key:{
        A: '#forge:rods',
        B: 'kubejs:source_psicoal',
        C: 'botania:livingwood_log'
      },
      id:`${id_prefix}campfire`
     },
     {
      output:'hexerei:pestle_and_mortar',
      pattern:['   ','ABA',' A '],
      key:{
        A: 'compactmachines:wall',
        B: 'minecraft:gold_nugget'
      },
      id:`${id_prefix}`
     },
     {
      output:'minecraft:stonecutter',
      pattern:['   ','CBC','AAA'],
      key:{
        A: 'compactmachines:wall',
        B: 'psi:psimetal',
        C: 'minecraft:gold_nugget'
      },
      id:`${id_prefix}stonecutter`
     },
     {
      output:'minecraft:crafting_table',
      pattern:['   ','AA ','AA '],
      key:{
        A: 'minecraft:oak_wood'
      },
      id:`${id_prefix}crafting_table`
     },
     {
      output:'botania:mana_pool',
      pattern:['   ','ABA','AAA'],
      key:{
        A: 'botania:livingrock',
        B: 'hexerei:moon_dust'
      },
      id:`${id_prefix}mana_pool`
     },
     {
      output:'8x elementalcraft:whiterock',
      pattern:['BBB','BAB','BBB'],
      key:{
        A: 'hexerei:moon_dust',
        B: 'minecraft:cobblestone'
      },
      id:`${id_prefix}whiterock`
     },
     {
      output:'create:andesite_funnel',
      pattern:['   ','A  ','B  '],
      key:{
        A: 'kubejs:imperfect_andesite_alloy',
        B: 'minecraft:dried_kelp'
      },
      id:`${id_prefix}andesite_funnel`
     },
     {
      output:'8x elementalcraft:elementpipe_impaired',
      pattern:['BAB','   ','   '],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'botania:manasteel_ingot'
      },
      id:`${id_prefix}elementpipe_impaired`
     },
     {
      output:'elementalcraft:extractor',
      pattern:[' B ',' A ','AAA'],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'elementalcraft:elementpipe_impaired'
      },
      id:`${id_prefix}extractor`
     },
     {
      output:'elementalcraft:small_container',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'elementalcraft:contained_crystal',
        B: 'elementalcraft:elementpipe_impaired',
        C:'minecraft:glass'
      },
      id:`${id_prefix}small_container`
     },
     {
      output:'elementalcraft:infuser',
      pattern:['   ','A A','BCB'],
      key:{
        A: 'botania:manasteel_nugget',
        B: 'botania:manasteel_ingot',
        C: 'elementalcraft:contained_crystal',
      },
      id:`${id_prefix}infuser`
     },
     {
      output:'elementalcraft:lavashrine',
      pattern:['AAA','BAB','AAA'],
      key:{
        A: 'elementalcraft:whiterock_burnt',
        B: 'elementalcraft:contained_crystal'
      },
      id:`${id_prefix}lavashrine`
     },
     {
      output:'6x ars_nouveau:arcane_pedestal',
      pattern:['ABA','CAC','CAC'],
      key:{
        A: 'ars_nouveau:sourcestone',
        B: 'elementalcraft:swift_alloy_block',
        C: 'elementalcraft:contained_crystal'
      },
      id:`${id_prefix}arcane_pedestal`
     },
     {
      output:'16x kubejs:polished_gold_block',
      pattern:['AA ','AA ','   '],
      key:{
        A: 'minecraft:gold_block'
      },
      id:`${id_prefix}polished_gold_block`
     },
     {
      output:'kubejs:projector_dish',
      pattern:['AC ','ABC','AC '],
      key:{
        A: 'compactmachines:wall',
        B: 'elementalcraft:source',
        C: 'create:framed_glass_pane'
      },
      id:`${id_prefix}projector_dish`
     },
     {
      output:'cyclic:placer',
      pattern:['ABA','CDC','AAA'],
      key:{
        A: 'compactmachines:wall',
        B: 'ars_nouveau:source_gem_block',
        C: 'kubejs:rough_psimetal',
        D: 'kubejs:source_clay_ball'
      },
      id:`${id_prefix}placer`
     },
     {
      output:'cyclic:user',
      pattern:['BCB','DED','AAA'],
      key:{
        A: 'minecraft:polished_andesite',
        B: 'elementalcraft:contained_crystal',
        C: 'botania:manasteel_ingot',
        D: 'minecraft:gold_nugget',
        E: 'elementalcraft:source'
      },
      id:`${id_prefix}user`
     },
     {
      output:'8x quark:smooth_soul_sandstone',
      pattern:['AA ','AA ','   '],
      key:{
        A: 'quark:soul_sandstone'
      },
      id:`${id_prefix}smooth_soul_sandstone`
     },
     {
      output:'elementalcraft:container',
      pattern:['DED','BCB','AAA'],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'elementalcraft:elementpipe',
        C: 'elementalcraft:burnt_glass',
        D: 'kubejs:gem_earth',
        E: 'spirit:soul_powder'
      },
      id:`${id_prefix}container`
     },
     {
      output:'4x elementalcraft:elementpipe',
      pattern:['   ','ABA','   '],
      key:{
        A: 'kubejs:gem_earth',
        B: 'spirit:soul_powder'
      },
      id:`${id_prefix}elementpipe_1`
     },
     {
      output:'elementalcraft:extractor_improved',
      pattern:[' A ','ADA','BCB'],
      key:{
        A: 'elementalcraft:extractor',
        B: 'elementalcraft:whiterock',
        C: 'kubejs:gem_earth',
        D: 'elementalcraft:swift_alloy_ingot'
      },
      id:`${id_prefix}extractor_improved`
     },
     {
      output:'elementalcraft:binder',
      pattern:['B B','ACA','   '],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'kubejs:gem_earth',
        C: 'elementalcraft:extractor_improved'
      },
      id:`${id_prefix}binder`
     },
     {
      output:'2x quark:soul_sandstone',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'minecraft:soul_sand',
        B: 'spirit:soul_powder'
      },
      id:`${id_prefix}soul_sandstone`
     },
     {
      output:'naturesaura:offering_table',
      pattern:['ACA','AAA',' B '],
      key:{
        A: 'naturesaura:infused_stone',
        B: 'ars_nouveau:archwood_planks',
        C: 'kubejs:mana_powder'
      },
      id:`${id_prefix}offering_table`
     },
     {
      output:'cwe:water_wheel_generator',
      pattern:['AAA','ABA','ACA'],
      key:{
        A: 'create:limestone',
        B: 'naturesaura:sky_ingot_block',
        C: 'create:shaft'
      },
      id:`${id_prefix}water_wheel_generator`
     },
     {
      output:'cyclic:collector',
      pattern:['DED','BCB','AAA'],
      key:{
        A: 'naturesaura:infused_slab',
        B: 'create:andesite_casing',
        C: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}').weakNBT(),
        D: 'kubejs:gem_earth',
        E: 'naturesaura:token_joy'
      },
      id:`${id_prefix}collector`
     },
     {
      output:'cwe:source_craftingtable',
      pattern:['ACA','CBC','ACA'],
      key:{
        A: 'create:framed_glass',
        B: Item.of('ars_nouveau:source_jar','{BlockEntityTag:{source:10000}}').weakNBT(),
        C: 'apotheosis:mythic_material'
      },
      id:`${id_prefix}source_craftingtable`
     },
     {
      output:'botania:fabulous_pool',
      pattern:['ABA','AAA','   '],
      key:{
        A: 'botania:shimmerrock',
        B: 'hexerei:moon_dust'
      },
      id:`${id_prefix}fabulous_pool_1`
     },
     {
      output:'botania:fabulous_pool',
      pattern:['ABA','AAA','   '],
      key:{
        A: 'kubejs:sky_nugget',
        B: 'botania:mana_pool'
      },
      id:`${id_prefix}fabulous_pool_2`
     },
     {
      output:'8x botania:bifrost_perm',
      pattern:['AAA','ABA','AAA'],
      key:{
        A:'botania:mana_glass',
        B: 'naturesaura:sky_ingot'
      },
      id:`${id_prefix}bifrost_perm`
     },
     {
      output:'8x botania:shimmerrock',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'botania:livingrock',
        B: 'naturesaura:sky_ingot'
      },
      id:`${id_prefix}shimmerrock`
     },
     {
      output:'8x create_crystal_clear:andesite_glass_casing',
      pattern:['BBB','BAB','BBB'],
      key:{
        A: 'create:andesite_casing',
        B: 'create:framed_glass'
      },
      id:`${id_prefix}andesite_glass_casing`
     },
     {
      output:'thermal:device_water_gen',
      pattern:['BBB','BAB','BBB'],
      key:{
        A: 'create:andesite_casing',
        B: 'ae2:fluix_crystal'
      },
      id:`${id_prefix}device_water_gen`
     },
     {
      output:'spirit:soul_steel_block',
      pattern:['AAA','AAA','AAA'],
      key:{
        A: 'spirit:soul_steel_ingot'
      },
      id:`${id_prefix}soul_steel_block`
     },
     {
      output:'ae2things:advanced_inscriber',
      pattern:['ADA','CBC','ADA'],
      key:{
        A: 'botania:rune_earth',
        B: 'ae2:inscriber',
        C: 'spirit:soul_steel_ingot',
        D: 'ae2:fluix_glass_cable'
      },
      id:`${id_prefix}advanced_inscriber`
     },
     {
      output:'mythicbotany:petrunia_floating',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'botania:mana_ring',
        B: 'mythicbotany:gjallar_horn_full',
        C: 'minecraft:grass_block'
      },
      id:`${id_prefix}petrunia_floating`
     },
     {
      output:'minecraft:dropper',
      pattern:['AAA','A A','ABA'],
      key:{
        A: '#forge:cobblestone',
        B: 'apotheosis:epic_material'
      },
      id:`${id_prefix}dropper`
     },
     {
      output:'mekanism:metallurgic_infuser',
      pattern:['ABA','DCD','ABA'],
      key:{
        A: 'kubejs:soul_steel_sheet',
        B: 'create:basin',
        C: 'create:andesite_casing',
        D: 'apotheosis:rare_material'
      },
      id:`${id_prefix}metallurgic_infuser`
     },
     {
      output:'botania:alfheim_portal',
      pattern:['ABA','ACA','ABA'],
      key:{
        A: '#botania:livingwood_logs',
        B: 'botania:terrasteel_ingot',
        C: 'naturesaura:token_euphoria'
      },
      id:`${id_prefix}alfheim_portal`
     },
     {
      output:'create:fluid_tank',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'elementalcraft:swift_alloy_ingot',
        B: 'botania:bifrost_perm',
        C: 'kubejs:soul_gem'
      },
      id:`${id_prefix}fluid_tank`
     },
     {
      output:'industrialforegoing:fluid_extractor',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'elementalcraft:drenched_iron_ingot',
        B: 'elementalcraft:purecrystal',
        C: 'kubejs:soul_steel_casing'
      },
      id:`${id_prefix}fluid_extractor`
     },
     {
      output:'elementalcraft:binder_improved',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'elementalcraft:elementpipe_creative',
        B: 'elementalcraft:binder',
        C: 'industrialforegoing:machine_frame_pity'
      },
      id:`${id_prefix}binder_improved`
     },
     {
      output:'2x ars_creo:starbuncle_wheel',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'create:shaft',
        B: 'ars_nouveau:starbuncle_charm',
        C: 'create:andesite_casing'
      },
      id:`${id_prefix}starbuncle_whee`
     },
     {
      output:'elementalcraft:drenched_saw_blade',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'kubejs:gaia_nugget',
        B: 'elementalcraft:drenched_iron_ingot',
        C: 'elementalcraft:air_silk'
      },
      id:`${id_prefix}drenched_saw_blade`
     },
     {
      output:'elementalcraft:water_mill_wood_saw',
      pattern:['AAA','BCB','AAA'],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'create:shaft',
        C: 'elementalcraft:drenched_saw_blade'
      },
      id:`${id_prefix}water_mill_wood_saw`
     },
     {
      output:'2x create:deployer',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'elementalcraft:purecrystal',
        B: 'create:andesite_casing',
        C: 'kubejs:swift_alloy_hand'
      },
      id:`${id_prefix}deployer`
     },
     {
      output:'2x ars_nouveau:arcane_core',
      pattern:['AAA','BCB','AAA'],
      key:{
        A: 'ars_nouveau:sourcestone',
        B: 'kubejs:polished_gold_block',
        C: 'elementalcraft:purecrystal'
      },
      id:`${id_prefix}arcane_core`
     },
     {
      output:'2x ars_nouveau:enchanting_apparatus',
      pattern:['ABA','ACA','ABA'],
      key:{
        A: 'kubejs:polished_gold_block',
        B: 'ars_nouveau:sourcestone',
        C: 'elementalcraft:purecrystal'
      },
      id:`${id_prefix}enchanting_apparatus`
     },
     {
      output:'2x create:mechanical_press',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'elementalcraft:purecrystal',
        B: 'create:andesite_casing',
        C: 'elementalcraft:swift_alloy_block'
      },
      id:`${id_prefix}mechanical_press`
     },
     {
      output:'2x create:depot',
      pattern:['   ',' A ',' B '],
      key:{
        A: 'elementalcraft:purecrystal',
        B: 'create:andesite_casing'
      },
      id:`${id_prefix}depot`
     },
     {
      output:'2x ars_nouveau:source_jar',
      pattern:['ABA','ACA','ADA'],
      key:{
        A: 'create:framed_glass',
        B: 'kubejs:polished_gold_block',
        C: 'elementalcraft:purecrystal',
        D: 'ars_nouveau:archwood_planks'
      },
      id:`${id_prefix}source_jar`
     },
     {
      output:'8x naturesaura:token_joy',
      pattern:[' A ','ABA',' A '],
      key:{
        A: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}').weakNBT(),
        B: 'elementalcraft:purecrystal'
      },
      id:`${id_prefix}token_joy`
     },
     {
      output:Item.of('ae2:annihilation_plane').enchant('minecraft:fortune', 3).weakNBT(),
      pattern:['AB ','CB ','AB '],
      key:{
        A: 'ae2:certus_quartz_crystal',
        B: 'apotheosis:gem_dust',
        C: 'create:deployer'
      },
      id:`${id_prefix}annihilation_plane/fortune_3`
     },
     {
      output:Item.of('ae2:annihilation_plane').enchant('minecraft:fortune', 5).weakNBT(),
      pattern:['AB ','CB ','AB '],
      key:{
        A: 'kubejs:gem_water',
        B: 'botania:gaia_ingot',
        C: 'create:deployer'
      },
      id:`${id_prefix}annihilation_plane/fortune_5`
     },
     {
      output:'ae2:mysterious_cube',
      pattern:['BBB','BAB','BBB'],
      key:{
        A: 'industrialforegoing:machine_frame_pity',
        B: 'kubejs:gem_water'
      },
      id:`${id_prefix}mysterious_cube`
     },
     {
      output:'redstonepen:control_box',
      pattern:['ABA','CDE','AFA'],
      key:{
        A: 'kubejs:gem_water',
        B: 'minecraft:redstone',
        C: 'ae2:logic_processor',
        D: 'elementalcraft:drenched_iron_ingot',
        E: 'ae2:engineering_processor',
        F: 'ae2:calculation_processor'
      },
      id:`${id_prefix}control_box`
     },
     {
      output:'ironfurnaces:gold_furnace',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:gold_ingot',
        B: 'naturesaura:gold_leaf',
        C: 'minecraft:furnace'
      },
      id:`${id_prefix}gold_furance`
     },
     {
      output:'botania:gaia_spreader',
      pattern:['ABA','CDE','AFA'],
      key:{
        A: 'botania:gaia_ingot',
        B: 'ae2:engineering_processor',
        C: 'ae2:logic_processor',
        D: 'botania:mana_spreader',
        E: 'ae2:calculation_processor',
        F: 'minecraft:redstone'
      },
      id:`${id_prefix}gaia_spreader`
     },
     {
      output:'botania:runic_altar',
      pattern:['AAA','ABA','   '],
      key:{
        A: 'botania:livingrock',
        B: 'industrialforegoing:machine_frame_pity'
      },
      id:`${id_prefix}runic_altar`
     },
     {
      output:'6x entangled:block',
      pattern:['ABA','CDE','AFA'],
      key:{
        A: 'botania:gaia_ingot',
        B: 'ae2:engineering_processor',
        C: 'ae2:logic_processor',
        D: 'spirit:soul_steel_block',
        E: 'ae2:calculation_processor',
        F: 'minecraft:redstone'
      },
      id:`${id_prefix}entangled_2`
     },
     {
      output:'powah:energizing_orb',
      pattern:['AAA','ABA','CCC'],
      key:{
        A: 'botania:bifrost_perm',
        B: 'create_new_age:blank_circuit',
        C: 'minecraft:black_dye'
      },
      id:`${id_prefix}energizing_orb`
     },
     {
      output:'powah:energizing_rod_basic',
      pattern:[' A ','BCB',' D '],
      key:{
        A: 'ae2:fluix_crystal',
        B: 'powah:capacitor_basic_tiny',
        C: 'ae2:engineering_processor',
        D: 'minecraft:black_dye'
      },
      id:`${id_prefix}energizing_rod_basic`
     },
     {
      output:'4x ae2:controller',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'thermal:cured_rubber_block',
        B: 'naturesaura:token_terror',
        C: 'minecraft:diamond_block'
      },
      id:`${id_prefix}ae2_controller`
     },
     {
      output:'ae2:drive',
      pattern:['ABA','CDC','ABA'],
      key:{
        A: 'naturesaura:infused_iron',
        B: 'ae2:engineering_processor',
        C: 'ae2:fluix_glass_cable',
        D: 'minecraft:diamond'
      },
      id:`${id_prefix}drive`
     },
     {
      output:'ae2:interface',
      pattern:['ABA','CDE','ABA'],
      key:{
        A: 'naturesaura:infused_iron',
        B: 'botania:mana_glass',
        C: 'ae2:annihilation_core',
        D: 'industrialforegoing:machine_frame_pity',
        E: 'ae2:formation_core'
      },
      id:`${id_prefix}interface`
     },
     {
      output:'ae2:pattern_provider',
      pattern:['ABA','CDE','ABA'],
      key:{
        A: 'naturesaura:infused_iron',
        B: 'minecraft:crafting_table',
        C: 'ae2:annihilation_core',
        D: 'industrialforegoing:machine_frame_pity',
        E: 'ae2:formation_core'
      },
      id:`${id_prefix}pattern_provider`
     },
     {
      output:'ae2:molecular_assembler',
      pattern:['ABA','CDE','ABA'],
      key:{
        A: 'create_new_age:overcharged_iron_sheet',
        B: 'ae2:quartz_glass',
        C: 'ae2:annihilation_core',
        D: 'create_new_age:blank_circuit',
        E: 'ae2:formation_core'
      },
      id:`${id_prefix}molecular_assembler`
     },
     {
      output:'ae2:crafting_unit',
      pattern:['ABA','CDC','ABA'],
      key:{
        A: 'kubejs:soul_steel_casing',
        B: 'ae2:logic_processor',
        C: 'ae2:fluix_glass_cable',
        D: 'minecraft:diamond'
      },
      id:`${id_prefix}crafting_unit`
     },
     {
      output:'2x ae2:import_bus',
      pattern:[' A ','BCB','   '],
      key:{
        A: 'ae2:annihilation_core',
        B: 'naturesaura:infused_iron',
        C: 'minecraft:sticky_piston'
      },
      id:`${id_prefix}import_bus`
     },
     {
      output:'2x ae2:export_bus',
      pattern:['BAB',' C ','   '],
      key:{
        A: 'ae2:annihilation_core',
        B: 'naturesaura:infused_iron',
        C: 'minecraft:piston'
      },
      id:`${id_prefix}export_bus`
     },
     {
      output:'ae2:wireless_access_point',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'ae2:fluix_block',
        B: 'ae2:calculation_processor',
        C: 'ae2:fluix_glass_cable'
      },
      id:`${id_prefix}wireless_access_point`
     },
     {
      output:'4x ae2:quantum_ring',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'create_new_age:overcharged_iron',
        B: 'minecraft:diamond',
        C: 'entangled:block'
      },
      id:`${id_prefix}quantum_ring`
     },
     {
      output:'ae2:quantum_link',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'create_new_age:overcharged_iron',
        B: 'ae2:quartz_glass',
        C: 'entangled:block'
      },
      id:`${id_prefix}quantum_link`
     },
     {
      output:'ae2:spatial_anchor',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'ae2:spatial_pylon',
        B: 'naturesaura:depth_ingot',
        C: 'entangled:block'
      },
      id:`${id_prefix}spatial_anchor`
     },
     {
      output:'2x ae2:me_p2p_tunnel',
      pattern:['ABC','   ','   '],
      key:{
        A: 'ae2:import_bus',
        B: 'ae2:flawless_budding_quartz',
        C: 'ae2:export_bus'
      },
      id:`${id_prefix}me_p2p_tunnel`
     },
     {
      output:'merequester:requester',
      pattern:['ABA','CDC','AEA'],
      key:{
        A: 'botania:rune_pride',
        B: 'ae2:interface',
        C: 'ae2:crafting_accelerator',
        D: 'minecraft:diamond',
        E: 'ae2:pattern_provider'
      },
      id:`${id_prefix}requester`
     },
     {
      output:'expatternprovider:ex_interface',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:diamond',
        B: 'ae2:capacity_card',
        C: '#ae2:interface'
      },
      id:`${id_prefix}ex_interface`
     },
     {
      output:'expatternprovider:ex_pattern_provider',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:diamond',
        B: 'ae2:capacity_card',
        C: '#ae2:pattern_provider'
      },
      id:`${id_prefix}ex_pattern_provider`
     },
     {
      output:'expatternprovider:ex_drive',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:diamond',
        B: 'ae2:capacity_card',
        C: 'ae2:drive'
      },
      id:`${id_prefix}ex_drive`
     },
     {
      output:'expatternprovider:ex_export_bus_part',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:diamond',
        B: 'ae2:speed_card',
        C: 'ae2:export_bus'
      },
      id:`${id_prefix}ex_export_bus_part`
     },
     {
      output:'expatternprovider:ex_import_bus_part',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:diamond',
        B: 'ae2:speed_card',
        C: 'ae2:import_bus'
      },
      id:`${id_prefix}ex_import_bus_part`
     },
     {
      output:'2x laserio:laser_node',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'psi:psimetal',
        B: 'hexerei:moon_dust',
        C: 'laserio:logic_chip'
      },
      id:`${id_prefix}laser_node`
     },
     {
      output:'eterminal:ex_pattern_access_part',
      pattern:[' A ','BCB',' A '],
      key:{
        A: 'thermal:cured_rubber',
        B: 'minecraft:redstone',
        C: 'ae2:pattern_access_terminal'
      },
      id:`${id_prefix}ex_pattern_access_part`
     },
     {
      output:'4x mekanismgenerators:reactor_glass',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: '#forge:glass',
        B: 'mekanismgenerators:fission_reactor_casing'
      },
      id:`${id_prefix}reactor_glass`
     },
     {
      output:'2x create:crushing_wheel',
      pattern:['ABA','CDC','ABA'],
      key:{
        A: 'minecraft:polished_andesite',
        B: 'kubejs:andesite_alloy_sheet',
        C: 'create_new_age:overcharged_diamond',
        D: 'create:shaft'
      },
      id:`${id_prefix}crushing_wheel`
     },
     {
      output:'2x mekanismgenerators:control_rod_assembly',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'botania:mana_diamond',
        B: 'create_new_age:reactor_rod',
        C: 'industrialforegoing:machine_frame_pity'
      },
      id:`${id_prefix}control_rod_assembly`
     },
     {
      output:'4x mekanismgenerators:fission_fuel_assembly',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'minecraft:redstone_block',
        B: 'create_new_age:reactor_rod',
        C: 'industrialforegoing:machine_frame_pity'
      },
      id:`${id_prefix}fission_fuel_assembly`
     },
     {
      output:'mekanism:basic_fluid_tank',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'elementalcraft:drenched_iron_ingot',
        B: 'minecraft:redstone',
        C: 'create_new_age:overcharged_diamond'
      },
      id:`${id_prefix}basic_fluid_tank`
     },
     {
      output:'mekanism:basic_chemical_tank',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'naturesaura:infused_iron',
        B: 'minecraft:redstone',
        C: 'create_new_age:overcharged_diamond'
      },
      id:`${id_prefix}basic_chemical_tank`
     },
     {
      output:'mekanism:rotary_condensentrator',
      pattern:['ABA','CDE','ABA'],
      key:{
        A: 'kubejs:gaia_nugget',
        B: 'create_new_age:blank_circuit',
        C: 'mekanism:basic_fluid_tank',
        D: 'industrialforegoing:machine_frame_pity',
        E: 'mekanism:basic_chemical_tank'
      },
      id:`${id_prefix}rotary_condensentrator`
     },
     {
      output:'elementalcraft:pureinfuser',
      pattern:['ABA','CDC','ACA'],
      key:{
        A: 'elementalcraft:whiterock',
        B: 'elementalcraft:elementpipe_creative',
        C: 'elementalcraft:purecrystal',
        D: 'botania:mana_diamond_block'
      },
      id:`${id_prefix}pureinfuser`
     },
     {
      output:'4x mekanism:pressure_disperser',
      pattern:[' A ','ABA',' A '],
      key:{
        A: 'mekanism:boiler_casing',
        B: 'elementalcraft:purecrystal'
      },
      id:`${id_prefix}pressure_disperser`
     },
     {
      output:'4x mekanism:superheating_element',
      pattern:['CAC','ABA','CAC'],
      key:{
        A: 'mekanism:boiler_casing',
        B: 'elementalcraft:purecrystal',
        C: 'elementalcraft:firecrystal'
      },
      id:`${id_prefix}superheating_element`
     },
     {
      output:'create_new_age:generator_coil',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'create_new_age:thorium',
        B: 'powah:uraninite_block'
      },
      id:`${id_prefix}generator_coil`
     },
     {
      output:'4x create_new_age:fluxuated_magnetite',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'mekanism:pressure_disperser',
        B: 'thermal:apatite',
        C: 'minecraft:diamond'
      },
      id:`${id_prefix}fluxuated_magnetite`
     },
     {
      output:'starbunclemania:fluid_jar',
      pattern:[' A ','BCB','DDD'],
      key:{
        A: 'elementalcraft:swift_alloy_ingot',
        B: 'minecraft:glass',
        C: 'thermal:apatite',
        D: 'ars_nouveau:blue_archwood_log'
      },
      id:`${id_prefix}fluid_jar`
     },
     {
      output:'starbunclemania:fluid_sourcelink',
      pattern:[' A ',' B ','   '],
      key:{
        A: 'cwe:mana_liquefier',
        B: 'functionalstorage:fluid_1'
      },
      id:`${id_prefix}fluid_sourcelink`
     },
     {
      output:'mythicbotany:mana_collector',
      pattern:['ABA','ACA','ADA'],
      key:{
        A: 'botania:glimmering_dreamwood',
        B: 'botania:gaia_ingot',
        C: 'minecraft:nether_star',
        D: 'botania:rune_pride'
      },
      id:`${id_prefix}mana_collecter`
     },
     {
      output:'minecraft:anvil',
      pattern:['AAA',' B ','BBB'],
      key:{
        A: 'psi:psimetal_block',
        B: 'psi:psimetal'
      },
      id:`${id_prefix}anvil`
     },
     {
      output:'4x malum:runewood_item_pedestal',
      pattern:['BCB','BBB',' A '],
      key:{
        A: 'malum:runewood_log',
        B: 'malum:runewood_planks',
        C: 'mythicbotany:niflheim_rune'
      },
      id:`${id_prefix}runewood_item_pedestal`
     },
     {
      output:'malum:spirit_altar',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: '#cwe:runewood_item',
        B: 'malum:runewood_log',
        C: 'malum:runewood_leaves'
      },
      id:`${id_prefix}spirit_altar`
     },
     {
      output:'thermal:machine_chiller',
      pattern:[' A ','BCB','DDD'],
      key:{
        A: '#forge:glass',
        B: 'naturesaura:token_terror',
        C: 'industrialforegoing:machine_frame_pity',
        D: 'botania:rune_water'
      },
      id:`${id_prefix}machine_chiller`
     },
     {
      output:'naturesaura:projectile_generator',
      pattern:['ABA','CDC','ABA'],
      key:{
        A: 'minecraft:snowball',
        B: 'botania:rune_water',
        C: 'naturesaura:token_terror',
        D: 'industrialforegoing:machine_frame_pity'
      },
      id:`${id_prefix}projectile_generator`
     },
     {
      output:'melter:melter',
      pattern:['A A','ABA','CAC'],
      key:{
        A: 'minecraft:basalt',
        B: 'elementalcraft:binder_improved',
        C: 'botania:terrasteel_nugget'
      },
      id:`${id_prefix}melter`
     },
     {
      output:'mekanism:combiner',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'naturesaura:infused_stone',
        B: 'botania:terrasteel_ingot',
        C: 'mekanism:steel_casing'
      },
      id:`${id_prefix}combiner`
     },
     {
      output:'rftoolsutility:crafter1',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'botania:livingrock',
        B: 'botania:manasteel_ingot',
        C: 'psi:psimetal_block'
      },
      id:`${id_prefix}crafter1`
     },
     {
      output:'entangled:block',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'apotheosis:mythic_material',
        B: 'create:andesite_alloy',
        C: 'create:andesite_casing'
      },
      id:`${id_prefix}entangled_1`
     },
     {
      output:'compactmachines:machine_normal',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'minecraft:gold_block',
        B: 'compactmachines:wall'
      },
      id:`${id_prefix}machine_normal`
     },
     {
      output:'mythicbotany:mana_infuser',
      pattern:['AAA','CBC','CCC'],
      key:{
        A: 'malum:arcane_spirit',
        B: 'botania:terra_plate',
        C: 'psi:ivory_psimetal'
      },
      id:`${id_prefix}mana_infuser`
     },
     {
      output:'thermal:machine_frame',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'kubejs:tin_spring',
        B: '#forge:glass',
        C: 'create:copper_casing'
      },
      id:`${id_prefix}machine_frame`
     },
     {
      output:'2x apotheosis:hellshelf',
      pattern:['AAA','CBC','AAA'],
      key:{
        A: 'minecraft:nether_bricks',
        B: '#forge:bookshelves',
        C: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}').weakNBT()
      },
      id:'apotheosis:hellshelf'
     },
     {
      output:'vintageimprovements:vacuum_chamber',
      pattern:['ABA','CDC','   '],
      key:{
        A: 'create:copper_casing',
        B: 'create:fluid_tank',
        C: 'kubejs:tin_spring',
        D: 'create:mechanical_pump'
      },
      id:`${id_prefix}vacuum_chamber`
     },
     {
      output:'mekanism:chemical_dissolution_chamber',
      pattern:['ABA','CDC','ABA'],
      key:{
        A: 'psi:ivory_psimetal',
        B: 'thermal:tin_ingot',
        C: 'mekanism:basic_chemical_tank',
        D: 'mekanism:steel_casing'
      },
      id:`${id_prefix}chemical_dissolution_chamber`
     },
     {
      output:'mekanism:crusher',
      pattern:['ABA','DCD','ABA'],
      key:{
        A: 'kubejs:tin_spring',
        B: 'mekanism:steel_casing',
        C: 'vintageimprovements:vibrating_table',
        D: 'ars_nouveau:glyph_crush'
      },
      id:`${id_prefix}crusher`
     },
     {
      output:'industrialforegoing:material_stonework_factory',
      pattern:['ABA','CDE','AFA'],
      key:{
        A: 'mekanism:alloy_infused',
        B: 'minecraft:crafting_table',
        C: 'minecraft:diamond_pickaxe',
        D: 'industrialforegoing:machine_frame_simple',
        E: 'minecraft:furnace',
        F: 'naturesaura:tainted_gold'
      },
      id:`${id_prefix}material_stonework_factory`
     },
     {
      output:'create:brass_funnel',
      pattern:['A  ','B  ','   '],
      key:{
        A: 'create:brass_ingot',
        B: 'minecraft:dried_kelp'
      },
      id:`${id_prefix}brass_funnel`
     },
     {
      output:'cwe:mana_injector',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'mekanism:elite_control_circuit',
        B: 'kubejs:compact_block',
        C: 'botania:fabulous_pool'
      },
      id:`${id_prefix}mana_injector`
     },
     {
      output:'mekanism:resistive_heater',
      pattern:['ABA','CDC','ABA'],
      key:{
        A: 'thermalendergy:prismalium_ingot',
        B: 'mekanism:energy_tablet',
        C: 'mekanism:elite_control_circuit',
        D: 'create:brass_casing'
      },
      id:`${id_prefix}resistive_heater`
     },
     {
      output:'mekanism:chemical_crystallizer',
      pattern:['ABA','CDE','ABA'],
      key:{
        A: 'mekanism:elite_control_circuit',
        B: 'thermalendergy:prismalium_ingot',
        C: 'mekanism:basic_chemical_tank',
        D: 'mekanism:steel_casing',
        E: 'minecraft:chest'
      },
      id:`${id_prefix}chemical_crystallizer`
     },
     {
      output:'thermal:device_rock_gen',
      pattern:['ABA','CDC','ABA'],
      key:{
        A: 'mekanism:elite_control_circuit',
        B: 'vintageimprovements:vanadium_ingot',
        C: 'minecraft:bucket',
        D: 'industrialforegoing:machine_frame_advanced',
      },
      id:`${id_prefix}device_rock_gen`
     },
     {
      output:'ironfurnaces:million_furnace',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'malum:aerial_spirit',
        B: 'thermal:upgrade_augment_2',
        C: 'ironfurnaces:diamond_furnace'
      },
      id:`${id_prefix}million_furnace`
     },
     {
      output:'mekanism:osmium_compressor',
      pattern:['ABA','CDC','CCC'],
      key:{
        A: 'powah:capacitor_nitro',
        B: 'thermalendergy:endergy_upgrade_2',
        C: 'mekanism:ingot_osmium',
        D: 'industrialforegoing:machine_frame_advanced'
      },
      id:`${id_prefix}onalium_compressor`
     },
     {
      output:'mekanism:chemical_oxidizer',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'mekanism:ultimate_control_circuit',
        B: 'mekanism:ingot_refined_obsidian',
        C: 'industrialforegoing:machine_frame_advanced'
      },
      id:`${id_prefix}chemical_oxidizer`
     },
     {
      output:'4x mekanismgenerators:fusion_reactor_frame',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'mekanism:ultimate_control_circuit',
        B: 'kubejs:quartz_light_oil',
        C: 'industrialforegoing:machine_frame_advanced'
      },
      id:`${id_prefix}fuel_reactor_frame`
     },
     {
      output:'industrialforegoing:machine_frame_supreme',
      pattern:['ABA','BCB','ABA'],
      key:{
        A: 'mekanism:ultimate_control_circuit',
        B: 'mekanism:hdpe_sheet',
        C: 'industrialforegoing:machine_frame_advanced'
      },
      id:`${id_prefix}machine_frame_supreme`
     },
     {
      output:'4x mekanism:sps_casing',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'mekanism:hdpe_pellet',
        B: 'industrialforegoing:machine_frame_supreme'
      },
      id:`${id_prefix}sps_casing`
     },
     {
      output:'compactmachines:machine_maximum',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'thermal:upgrade_augment_3',
        B: 'compactmachines:machine_giant'
      },
      id:`${id_prefix}machine_maximum`
     },
     {
      output:'create:spout',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'kubejs:soul_gem',
        B: 'create:andesite_casing',
        C: 'minecraft:dried_kelp'
      },
      id:`${id_prefix}spout`
     },
     {
      output:'8x mekanism:induction_casing',
      pattern:[' A ','ABA',' A '],
      key:{
        A: 'mekanism:boiler_casing',
        B: 'malum:aerial_spirit'
      },
      id:`${id_prefix}induction_casing`
     },
     {
      output:'2x mekanism:induction_port',
      pattern:[' A ','ABA',' A '],
      key:{
        A: 'mekanism:induction_casing',
        B: 'thermal:upgrade_augment_2'
      },
      id:`${id_prefix}induction_port`
     },
     {
      output:'8x mekanism:structural_glass',
      pattern:['AAA','ABA','AAA'],
      key:{
        A: 'create_crystal_clear:andesite_glass_casing',
        B: 'mekanism:boiler_casing'
      },
      id:`${id_prefix}structural_glass`
     },
     {
      output:'8x create:cogwheel',
      pattern:['BBB','BAB','BBB'],
      key:{
        A: 'create:andesite_casing',
        B: 'create:shaft'
      },
      id:`${id_prefix}cogwheel`
     },
     {
      output:'8x mekanism:basic_pressurized_tube',
      pattern:['   ','ABA','   '],
      key:{
        A: 'botania:mana_diamond',
        B: 'elementalcraft:elementpipe_improved'
      },
      id:`${id_prefix}basic_pressurized_tube`
     },
     {
      output:'create:content_observer',
      pattern:[' A ',' B ',' C '],
      key:{
        A: 'minecraft:redstone_block',
        B: 'create:andesite_casing',
        C: 'minecraft:observer'
      },
      id:`${id_prefix}content_observer`
     }]
  
  recipes.forEach(recipe =>{
    event.shaped(recipe.output,recipe.pattern,recipe.key).id(recipe.id)
  })
})