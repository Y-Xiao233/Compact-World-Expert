ServerEvents.recipes(event => {
  const id_prefix = 'compact_world:recipes/cradting_table/shaped/item/'
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
      pattern:['AA ','AA ','   '],
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
        A: 'kubejs:rough_psimetal',
        B: 'botania:livingwood_twig'
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
      output:'sophisticatedbackpacks:gold_backpack',
      pattern:['BBB','BAB','BBB'],
      key:{
        A: 'sophisticatedbackpacks:backpack',
        B: 'elementalcraft:contained_crystal'
      },
      id:`${id_prefix}gold_backpack`
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
        B: 'minecraft:wooden_hoe',
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
     }]
  
  recipes.forEach(recipe =>{
    event.shaped(recipe.output,recipe.pattern,recipe.key).id(recipe.id)
  })

  event.shaped('8x elementalcraft:swift_alloy_ingot',['AAA','ABA','AAA'],{A:'minecraft:gold_ingot',B:'minecraft:lava_bucket'}).replaceIngredient('minecraft:lava_bucket', 'minecraft:bucket').id(`${id_prefix}swift_alloy_ingot`)
})