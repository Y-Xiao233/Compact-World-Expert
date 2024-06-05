Platform.getInfo('cwe').name = 'Compact World: Expert'

StartupEvents.registry("block", (event) => {
    const custom_machinerys = [
        'cwe:mana_crush_machine',
        'cwe:mana_liquefier',
        'cwe:source_craftingtable',
        'cwe:mana_booster',
        'cwe:fake_fluid_tank',
        'cwe:fake_mana_pool',
        'cwe:dream_portal_core',
        'cwe:mana_injector',
        'cwe:ore_laser'
    ]

    custom_machinerys.forEach(custom_machinery =>{
        event.create(custom_machinery,"custommachinery").renderType("translucent").displayName(Text.translate(`block.${custom_machinery.replace(':','.')}`))
    })
})