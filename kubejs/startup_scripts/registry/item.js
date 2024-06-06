Platform.getInfo('kubejs').name = 'Compact World: Expert'

StartupEvents.registry("item", (event) => {
    const registry_item = [
        'compact_dust',
        'compact_ingot',
        'highly_rough_psimetal',
        'source_dust',
        'water_droplet',
        'source_clay_ball',
        'rough_psimetal',
        'compact_nugget',
        'source_fiber',
        'functionalstorage_upgrade_base',
        'imperfect_andesite_alloy',
        'shining_gold_mix',
        'trace_fire_element_ball',
        'blank_element_ball',
        'spherical_mold',
        'archwood_stick',
        'gem_earth',
        'bottle_water',
        'mana_powder',
        'spark_upgrade_base',
        'swift_alloy_hand',
        'andesite_alloy_sheet',
        'gold_whisk',
        'rune_blank',
        'rune_press',
        'sky_nugget',
        'soul_steel_sheet',
        'enriched_soul_steel',
        'terra_essence',
        'mana_certus_quartz_crystal',
        'soul_gem',
        'gaia_nugget',
        'gem_water',
        'enriched_terra',
        'fake_source',
        'sky_key',
        'raw_enriched_iron',
        'lens_of_blank',
        'lens_of_tainted',
        'blank_alloy_infused',
        'pure_matter_ball',
        'tin_rod',
        'tin_spring',
        'lens_of_blazing',
        'blank_diamond_crystal_niotic',
        'press_control_circuit_die',
        'quartz_light_oil',
        'ingot_refined_tar',
        'rainbow_ingot',
        'rainbow_nugget',
        'creative_cell_housing'
    ]
    
    const registry_tool = [
        {
            id:'highly_rough_psimetal_pickaxe',
            tooltype:'pickaxe',
            tier:'iron',
            maxDamage:512
        },
        {
            id:'highly_rough_psimetal_axe',
            tooltype:'axe',
            tier:'iron',
            maxDamage:512
        },
        {
            id:'highly_rough_psimetal_sword',
            tooltype:'sword',
            tier:'iron',
            maxDamage:512
        },
        {
            id:'highly_rough_psimetal_shovel',
            tooltype:'shovel',
            tier:'iron',
            maxDamage:512
        },
        {
            id:'swift_alloy_shovel',
            tooltype:'shovel',
            tier:'diamond',
            maxDamage:2048
        }]

    registry_item.forEach(items =>{
        event.create(items)
    })

    registry_tool.forEach(tools =>{
        event.create(tools.id,tools.tooltype).tier(tools.tier).maxDamage(tools.maxDamage).unstackable()
    })

    event.create('cad_assembly_compact').unstackable()
    event.create('source_psicoal').burnTime(800)
    event.create('psiknife').unstackable().maxDamage(32)
    event.create('swift_alloy_key').unstackable()
    event.create('magical_stick').unstackable().glow(true)
    event.create('spirit_press').unstackable()
    event.create('tin_source').color(0x476F81).unstackable().texture('kubejs:item/source')
    event.create('light_ingot').glow(true)
    event.create('rainbow_pickaxe','pickaxe').tier('diamond').speed(1000)
})